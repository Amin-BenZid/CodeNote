import express from "express";
import { PORT, mongoDbURL } from "./config.js";
import mongoose from "mongoose";
import { Code } from "./models/codeModel.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(234).send("Welcome to NoteCode API");
});

// TO GET CODE WIRTE /api/code/:id (use GET)
// TO ADD CODE WRTIE /api/code/add (use POST)
// TO UPDATE CODE WRITE /api/code/update/:id (use PUT)

app.get("/api/code/:id", async (req, res) => {
  if (req.params.id) {
    const data = await Code.findById(req.params.id);
    return res.status(200).send(data);
  }
  return res.status(500).send({ message: "error" });
});
// Route for saving a new code
app.post("/api/code/add", async (req, res) => {
  try {
    if (!req.body.code) {
      return res.status(400).send({ message: "Code is required" });
    }
    const newCode = new Code({ code: req.body.code });
    const savedCode = await newCode.save();
    return res.status(201).send(savedCode);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});
// update an existing code
app.put("/api/code/update/:id", async (req, res) => {
  const updatedCode = req.body.code;
  const id = req.params.id;
  try {
    const updatedResult = await Code.findByIdAndUpdate(
      { _id: id },
      {
        code: updatedCode,
      }
    );
    res.status(200).send(updatedResult);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

mongoose
  .connect(mongoDbURL)
  .then(() => {
    console.log("connected to MongoDB server");
    app.listen(PORT, () => {
      console.log(`app is listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

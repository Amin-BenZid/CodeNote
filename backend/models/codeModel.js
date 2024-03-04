import mongoose from "mongoose";

const codeSchema = new mongoose.Schema({
  code: String,
});

export const Code = mongoose.model("Code", codeSchema);

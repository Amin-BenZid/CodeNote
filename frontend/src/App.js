import bg from "./img/Hero-Background-notecode@2x.png";
import Editor from "@monaco-editor/react";
import share from "./img/Share.svg";
import { useState } from "react";
import axios from "axios";
import link from "./img/link.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Code from "./Code";
import Lang from "./Lang";
import Theme from "./Theme";
import SecOne from "./SecOne";
const api = "http://localhost:5000/api/";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/code">
            <Code />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 h-screen relative">
      <ToastContainer />
      <div
        className="bg-cover bg-center h-[80%] w-full flex justify-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <SecOne />
      </div>
      <SecTwo />
    </div>
  );
}

export function SecTwo() {
  const [selectedLang, setSelectedLang] = useState("html");
  const [selecetedTheme, setSelecetedTheme] = useState("light");
  const [newCode, setNewCode] = useState("");
  const defaultCode = `<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallengs.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>`;
  function handleCodeChange(e) {
    setNewCode(e);
  }
  return (
    <div className="absolute h-auto w-auto top-48 rounded-lg left-6 shadow-2xl md:left-8 md:top-72 lg:top-40 lg:left-20 ">
      <div className="h-8 w-full bg-white rounded-t-xl"></div>
      <Editor
        className=" h-[60vh] md:h-[65vh] lg:h-[59vh]  "
        width="90vw "
        defaultLanguage={selectedLang}
        defaultValue={defaultCode}
        theme={selecetedTheme}
        onChange={handleCodeChange}
      />
      <div className="h-14 w-full bg-white rounded-b-xl flex  justify-center items-center px-4 ">
        <div className=" w-[50%] flex gap-2">
          <Lang selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
          <Theme selecetedTheme={selecetedTheme} setSelecetedTheme={setSelecetedTheme} />
        </div>
        <Button newCode={newCode} setNewCode={setNewCode} />
      </div>
    </div>
  );
}

function Button({ newCode, setNewCode }) {
  const handleClick = () => {
    if (newCode !== "") {
      axios
        .post(`${api}code/add`, {
          code: newCode,
        })
        .then(function (res) {
          // link to back end
          // `${api}code/${res.data._id}`;
          navigator.clipboard.writeText(`http://localhost:3000/code?id=${res.data._id}`);
          toast("Link is copied");
          setNewCode("");
        })
        .catch(function (error) {
          toast("Error");
        });
    }
  };
  return (
    <div className=" w-[50%] flex justify-end gap-4">
      <div
        className={`${
          newCode === "" ? "hidden" : "flex"
        } text-[12px] items-center gap-1 `}
      >
        <img className="w-5" src={link} alt="link" />
        <p>link</p>
      </div>
      <button
        onClick={handleClick}
        disabled={newCode === ""}
        className={`transition-all text-white p-1 rounded-3xl w-24 h-8 flex  justify-center items-center gap-2 ${
          newCode !== "" ? "bg-[#406AFF] hover:bg-[#1d2c60]" : "bg-[#3b3b3b] opacity-30"
        }`}
      >
        <img src={share} alt="share" />
        Share
      </button>
    </div>
  );
}

import bg from "./img/Hero-Background-notecode@2x.png";
import Editor from "@monaco-editor/react";
import share from "./img/Share.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import link from "./img/link.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import SecOne from "./SecOne";
import Lang from "./Lang";
import Theme from "./Theme";
const api = "http://localhost:5000/api/";

const Code = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default Code;
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
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");
export function SecTwo() {
  const [selectedLang, setSelectedLang] = useState("html");
  const [selecetedTheme, setSelecetedTheme] = useState("light");
  const [newCode, setNewCode] = useState("");
  const [code, setCode] = useState();
  useEffect(() => {
    axios
      .get(`${api}code/${myParam}`)
      .then(function (response) {
        setCode(response.data.code);
      })
      .catch(function (error) {
        toast("Error");
      });
  }, []);

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
        defaultValue={code}
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
function Button({ newCode }) {
  const handleClick = () => {
    axios
      .put(`${api}code/update/${myParam}`, { code: newCode })
      .then(function (res) {
        navigator.clipboard.writeText(window.location.href);
        toast("Link is copied");
      })
      .catch(function (error) {
        toast("Error");
      });
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

import bg from "./img/Hero-Background-notecode@2x.png";
import logo from "./img/NoteCodeLogo.svg";
import Editor from "@monaco-editor/react";
import share from "./img/Share.svg";
import { useState } from "react";

function App() {
  return (
    <div className="bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 h-screen relative">
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

export default App;

function SecOne() {
  return (
    <div className=" h-full w-full flex flex-col items-center p-2 py-8 gap-7 md:gap-14 lg:gap-5 lg:py-3">
      <img className="w-24 h-auto md:w-48 lg:w-32" src={logo} alt="logo" />
      <div className="flex flex-col w-full h-auto items-center md:gap-2">
        <p className="font-bold text-2xl md:text-[3rem] lg:text-[1.8rem]">
          Create & Share
        </p>
        <p className="font-bold text-[2rem] md:text-[4rem] lg:text-[2.3rem]">
          Your Code easily
        </p>
      </div>
    </div>
  );
}

function SecTwo() {
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
  console.log(newCode);
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
        <Button />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className=" w-[50%] flex justify-end">
      <button className="bg-[#406AFF] hover:bg-[#1d2c60] transition-all text-white p-1 rounded-3xl w-24 h-8 flex  justify-center items-center gap-2">
        <img src={share} alt="share" />
        Share
      </button>
    </div>
  );
}

function Lang({ selectedLang, setSelectedLang }) {
  const languages = [
    "Python",
    "C",
    "Java",
    "C++",
    "C#",
    "Visual Basic .NET",
    "JavaScript",
    "PHP",
    "SQL",
    "Assembly",
  ];
  const handleSelectChange = (event) => {
    setSelectedLang(event.target.value);
  };

  return (
    <>
      <select
        className={`bg-[#CED6E1] w-14 h-5 rounded-3xl flex items-center justify-center text-[12px] `}
        value={selectedLang}
        onChange={handleSelectChange}
      >
        <option value="html" className="option">
          HTML
        </option>
        {languages.map((e, index) => (
          <option key={index} value={e.toLocaleLowerCase()} className="option">
            {e}
          </option>
        ))}
      </select>
    </>
  );
}

function Theme({ selecetedTheme, setSelecetedTheme }) {
  const handleSelectChange = (event) => {
    setSelecetedTheme(event.target.value);
  };
  return (
    <div className="bg-[#CED6E1] w-14 h-5 rounded-3xl flex items-center justify-center text-[10px] ">
      <select
        className={`bg-[#CED6E1] w-14 h-5 rounded-3xl flex items-center justify-center text-[12px] `}
        value={selecetedTheme}
        onChange={handleSelectChange}
      >
        <option value="vs-light" className="option">
          Light
        </option>
        <option value="vs-dark" className="option">
          Dark
        </option>
      </select>
    </div>
  );
}

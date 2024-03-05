import React from "react";

export default function Lang({ selectedLang, setSelectedLang }) {
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
        className={`bg-[#CED6E1] w-14 h-5 rounded-3xl flex items-center justify-center text-[12px] cursor-pointer`}
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

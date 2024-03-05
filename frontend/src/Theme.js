import React from "react";

export default function Theme({ selecetedTheme, setSelecetedTheme }) {
  const handleSelectChange = (event) => {
    setSelecetedTheme(event.target.value);
  };
  return (
    <div className="bg-[#CED6E1] w-14 h-5 rounded-3xl flex items-center justify-center text-[10px] ">
      <select
        className={`bg-[#CED6E1] w-14 h-5 rounded-3xl flex items-center justify-center text-[12px] cursor-pointer`}
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

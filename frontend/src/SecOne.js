import logo from "./img/NoteCodeLogo.svg";
import React from "react";

export default function SecOne() {
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

import React from "react";
import Sun from "../assets/icon-sun.svg";
import Moon from "../assets/icon-moon.svg";
import { lightAndDarkMode } from "./LightAndDark";

function NavBar() {
  return (
    <nav className="bg-bigLight dark:bg-bigDark w-full h-72">
      <div className="flex flex-row justify-between w-11/12 md:w-2/4 items-center m-auto pt-16">
        <h1 className="font-bold text-4xl text-white tracking-widest font-mono">
          TODO
        </h1>
        <img
          src={Moon}
          alt=""
          className="btnModeM"
          onClick={lightAndDarkMode}
        />
        <img
          src={Sun}
          alt=""
          className="btnModeS hidden"
          onClick={lightAndDarkMode}
        />
      </div>
    </nav>
  );
}

export default NavBar;

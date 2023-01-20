import React, { useEffect } from "react";
import Sun from "../assets/icon-sun.svg";
import Moon from "../assets/icon-moon.svg";
import { useState } from "react";
import TimeCount from "./TimeCount";

function NavBar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  );

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const lightAndDarkMode = (e) => {
    e.preventDefault();
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <nav className="bg-bigLight dark:bg-bigDark w-full h-72">
      <div className="flex flex-row justify-between w-full px-10 md:w-2/4 items-center m-auto pt-10">
        <h1 className="font-bold text-4xl text-white tracking-widest font-mono">
          TODO
        </h1>

        <img
          src={localStorage.getItem("theme") === "dark" ? Sun : Moon}
          alt=""
          className="btnModeM"
          onClick={lightAndDarkMode}
        />
      </div>
      <TimeCount />
    </nav>
  );
}

export default NavBar;

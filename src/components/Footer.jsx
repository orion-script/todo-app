import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-zinc-50 dark:bg-BackOne w-full h-auto m-auto pt-80 md:pt-96 text-center">
      <p className="text-slate-400 pt-5">Drag and drop to reorder the list</p>

      <div className="flex flex-row justify-center w-full h-10 text-black dark:text-slate-400 mb-5">
        <a href="https://github.com/Hadestech01/">
          <FaGithub className="cursor-pointer mx-2 mt-5 hover:mt-2" />
        </a>

        <a href="https://web.facebook.com/olaniyi.john.5070">
          <FaFacebook className="cursor-pointer mx-2 mt-5 hover:mt-2" />
        </a>

        <a href="https://twitter.com/Hades_Codes">
          <FaTwitter className="cursor-pointer mx-2 mt-5 hover:mt-2" />
        </a>

        <a href="https://www.linkedin.com/in/john-olaniyi-9643461b6/">
          <FaLinkedinIn className="cursor-pointer mx-2 mt-5 hover:mt-2" />
        </a>
      </div>

      <div className="w-full md:w-2/4 text-center text-xs typewritter text-gray-700 dark:text-slate-400 h-5">
        <p className="typewritter">
          Designed by{" "}
          <a className="font-thin" href="https://github.com/Hadestech01/">
            HadesCodes
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;

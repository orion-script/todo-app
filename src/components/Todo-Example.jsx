import React from "react";
import Cross from "../assets/icon-cross.svg";

function TodoExample(prop) {
  return (
    <div>
      <li className="bg-white dark:bg-whiteOne my-1 py-3 rounded-lg items-center shadow-lg flex justify-between cursor-pointer w-full">
        <div className="w-9/12">
          <input
            id=""
            type="checkbox"
            defaultChecked={prop.completed}
            className="mx-3 cursor-pointer"
          />
          <label className="" htmlFor={prop.id}>
            {prop.name}
          </label>
        </div>
        <div className="w-3/12 md:w-2/12 flex justify-around items-start">
          <button type="button" className="">
            Edit
          </button>
          <button type="button" className="h-7">
            <img src={Cross} alt="" className="h-4 mx-2 dark:bg-white" />
          </button>
        </div>
      </li>
    </div>
  );
}

export default TodoExample;

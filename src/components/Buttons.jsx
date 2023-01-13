import React from "react";

function Buttons() {
  return (
    <div className="text-slate-400 w-11/12 md:w-2/4 m-auto">
      <div className="bg-white dark:bg-whiteOne md:hidden mt-5 h-10 rounded-lg shadow-lg flex justify-between px-5 items-center">
        <button>0 items left</button>
        <button>Clear Completed</button>
      </div>
      <div className="bg-white dark:bg-whiteOne h-10 rounded-lg shadow-lg flex justify-around items-center mt-5">
        <div className="hidden md:block md:w-1/5">
          <button>0 items left</button>
        </div>
        <div className="w-11/12 md:w-4/12 flex justify-around">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <div className="hidden md:block md:w-1/5">
          <button>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;

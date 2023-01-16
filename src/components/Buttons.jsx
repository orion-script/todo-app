import React from "react";

function Buttons(props) {
  return (
    <div className="text-slate-400 w-11/12 md:w-2/4 m-auto">
      <div className="bg-white dark:bg-whiteOne md:hidden mt-5 h-10 rounded-lg shadow-lg flex justify-between px-5 items-center">
        <h2>{props.count} tasks remains</h2>
        <button>Clear Completed</button>
      </div>

      <div className="bg-white dark:bg-whiteOne h-10 rounded-lg shadow-lg flex justify-around items-center mt-5">
        <div className="hidden md:block md:w-1/5">
          <h2 className="">{props.count} tasks remains</h2>
        </div>

        {/* Array of filters buttons */}
        <div className="w-11/12 md:w-4/12 flex justify-around">
          <button type="button" aria-pressed="true">
            All
          </button>

          <button type="button" aria-pressed="false">
            Active
          </button>

          <button type="button" aria-pressed="false">
            Completed
          </button>
        </div>

        <div className="hidden md:block md:w-1/5">
          <button>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;

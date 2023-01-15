import React from "react";

function InputNewTodo() {
  return (
    <div className="flex justify-between mb-8 w-11/12 md:w-2/4 m-auto h-12 text-white">
      <input
        name="text"
        type="text"
        autoComplete="off"
        id=""
        placeholder="Create a new todo..."
        className="bg-white dark:bg-gray-900 w-9/12 h-12 rounded-lg pl-8"
      />

      <button
        type="submit"
        className="bg-white dark:bg-gray-900 w-1/5 text-black dark:text-slate-400 rounded-lg"
      >
        Add
      </button>
    </div>
  );
}

export default InputNewTodo;

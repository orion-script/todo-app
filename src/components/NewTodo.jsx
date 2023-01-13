import React from "react";

function NewTodo() {
  return (
    <div className="mb-8 w-11/12 md:w-2/4 m-auto h-12">
      <input
        name=""
        type="search"
        id=""
        placeholder="Create a new todo..."
        className="bg-white dark:bg-gray-900 w-full h-12 rounded-lg pl-8"
      />
    </div>
  );
}

export default NewTodo;

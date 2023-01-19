import React from "react";
import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between mb-6 w-11/12 md:w-2/4 m-auto h-12 text-white"
    >
      <input
        type="text"
        className="bg-white dark:bg-gray-900 w-9/12 h-12 rounded-lg pl-8 text-slate-400"
        name="text"
        autcomplete="off"
        placeholder="Create a new todo..."
        value={name}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-white dark:bg-gray-900 w-1/5 text-slate-400 rounded-lg"
      >
        Add
      </button>
    </form>
  );
}

export default Form;

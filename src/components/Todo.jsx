import React, { useEffect, useRef, useState } from "react";
import Cross from "../assets/icon-cross.svg";

function InputNewTodo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const wasEditing = usePrevious(isEditing);

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  };

  const editingTask = (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col">
        <label className="w-full text-center" htmlFor={props.id}>
          Rename "{props.name}"
        </label>

        <input
          id={props.id}
          className="bg-gray-400 text-slate-900 dark:bg-gray-500 dark:text-slate-300 pl-2 md:w-11/12 w-4/5 m-auto my-1 rounded-lg"
          type="text"
          value={newName}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>

      <div className="w-full flex justify-around">
        <button type="button" className="" onClick={() => setEditing(false)}>
          Cancel
        </button>

        <button type="submit">Save</button>
      </div>
    </form>
  );

  const displayTask = (
    <div className="items-center flex justify-between cursor-pointer w-full h-8">
      <div className="w-9/12">
        <input
          id={props.id}
          type="checkbox"
          className="mx-3 cursor-pointer"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="w-3/12 md:w-2/12 flex justify-around items-start">
        <button
          type="button"
          className="btn"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit
        </button>

        <button type="button" className="h-7">
          <img
            src={Cross}
            alt=""
            onClick={() => props.deleteTask(props.id)}
            className="h-4 mx-2 dark:bg-white"
          />
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return (
    <li className="bg-white dark:bg-whiteOne mb-2 rounded-lg items-center flex justify-between cursor-pointer w-full">
      <div className="w-full">
        {isEditing ? editingTask : displayTask}
        <hr className="h-1 w-[98%] m-auto text-slate-400 mt-3" />
      </div>
    </li>
  );
}

export default InputNewTodo;

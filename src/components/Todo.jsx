import React, { useEffect, useRef, useState } from "react";
import Cross from "../assets/icon-cross.svg";

function InputNewTodo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const wasEditing = usePrevious(isEditing);

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="bg-white dark:bg-whiteOne my-1 py-3 rounded-lg items-center shadow-lg flex justify-between cursor-pointer w-full h-10">
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
        <button
          type="button"
          className="h-7"
          onClick={() => props.deleteTask(props.id)}
        >
          <img src={Cross} alt="" className="h-4 mx-2 dark:bg-white" />{" "}
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
    <li className="bg-white dark:bg-whiteOne my-1 rounded-lg items-center flex justify-between cursor-pointer w-full">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}

export default InputNewTodo;

// import React from "react";

// function InputNewTodo() {
//   return (
//     <div className="flex justify-between mb-8 w-11/12 md:w-2/4 m-auto h-12 text-white">
//       <input
//         name="text"
//         type="text"
//         autoComplete="off"
//         id=""
//         placeholder="Create a new todo..."
//         className="bg-white dark:bg-gray-900 w-9/12 h-12 rounded-lg pl-8"
//       />

//       <button
//         type="submit"
//         className="bg-white dark:bg-gray-900 w-1/5 text-slate-400 rounded-lg"
//       >
//         Add
//       </button>
//     </div>
//   );
// }

// export default InputNewTodo;

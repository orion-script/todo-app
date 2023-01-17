import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import NavBar from "./components/NavBar";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/Buttons";
import Footer from "./components/Footer";
import "./App.css";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const listHeadingRef = useRef(null);

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
    localStorage.setItem("task", [newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="w-full flex flex-col justify-between h-auto">
      <NavBar />
      <div className="absolute w-full h-auto top-40 md:top-28 text-slate-400">
        <Form addTask={addTask} />
        <ul className="w-11/12 md:w-2/4 m-auto" aria-labelledby="list-heading">
          {taskList}
        </ul>
        <div className="md:hidden w-11/12 md:w-2/4 bg-white dark:bg-whiteOne h-10 rounded-lg shadow-lg flex justify-around items-center m-auto my-3">
          <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
            {headingText}
          </h2>
          <button>Clear Completed</button>
        </div>
        <div className="w-11/12 md:w-2/4 bg-white dark:bg-whiteOne h-10 rounded-lg shadow-lg flex justify-around items-center m-auto">
          <div className="hidden md:block w-3/12">
            <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
              {headingText}
            </h2>
          </div>
          <div className="w-11/12 md:w-3/5 flex justify-around">
            {filterList}
            <button className="hidden md:block">Clear Completed</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

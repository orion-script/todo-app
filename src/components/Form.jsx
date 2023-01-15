import React from "react";
import TodoExample from "./Todo-Example";

function Form(props) {
  const taskList = props.tasks.map((task) => (
    <TodoExample
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
    <div className="w-11/12 md:w-2/4 m-auto h-auto text-slate-400">
      <ul className="w-full" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default Form;

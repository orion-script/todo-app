import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const DATA = [
  // { id: "todo-0", name: "I want to Eat", completed: true },
  // { id: "todo-1", name: "I want to Sleep", completed: false },
  // { id: "todo-2", name: "I want to Repeat", completed: false },
  // { id: "todo-2", name: "I want to Code", completed: false },
];

root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

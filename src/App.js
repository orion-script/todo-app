import React from "react";
import NavBar from "./components/NavBar";
import InputNewTodo from "./components/InputNewTodo";
import Form from "./components/Form";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const DATA = [
    { id: "todo-0", name: "I want to Eat", completed: true },
    { id: "todo-1", name: "I want to Sleep", completed: false },
    { id: "todo-2", name: "I want to Repeat", completed: false },
    { id: "todo-2", name: "I want to Code", completed: false },
  ];
  return (
    <div className="w-full flex flex-col justify-between h-auto">
      <NavBar />
      <div className="absolute w-full h-auto top-40 md:top-36">
        <InputNewTodo />
        <div>
          <Form tasks={DATA} />
          <Buttons count={DATA.length} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

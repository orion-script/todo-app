import React from "react";
import NavBar from "./components/NavBar";
import NewTodo from "./components/NewTodo";
import Main from "./components/Main";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-zinc-50 dark:bg-BackOne w-full flex flex-col justify-between h-auto">
      <NavBar />
      <div className="absolute w-full h-auto top-32">
        <NewTodo />
        <div>
          <Main />
          <Buttons />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

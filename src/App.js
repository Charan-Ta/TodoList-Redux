import React from "react";
import Header from "./components/Header";
import Todobar from "./components/Todobar";
import Todolist from "./components/Todolist";

const App = () => {
  return (
    <div>
      <Header />
      <Todobar />
      <Todolist />
    </div>
  );
};

export default App;

// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Note from "./Component/Note";

const App = () => {
  return (
    <div className="main">
      <Header />
      <Note />
    </div>
  );
};

export default App;

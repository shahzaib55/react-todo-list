import React from "react";
import "../style.css";
import logo from "../logo.svg";
import Form from "./form";
function Header() {
  return (
    <>
      <div className="todo-header">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Todo List</h1>
        </div>
        <div className="main">
          <Form />
        </div>
      </div>
    </>
  );
}

export default Header;

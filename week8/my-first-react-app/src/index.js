import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header>Title Passed from App</Header>
      <h1>My App</h1>
      <h2>My First React App!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

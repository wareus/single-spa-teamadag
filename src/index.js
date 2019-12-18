import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello></Hello>
      </div>
    );
  }
}

let Root = document.getElementById("app");

ReactDOM.render(<App />, Root);

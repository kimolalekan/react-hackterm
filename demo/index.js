import React from "react";
import ReactDOM from "react-dom";
import Terminal from "react-hackterm";

//Add theme
import "react-hackterm/themes.default.css";

function App() {
  return (
    <div className="App">
      <Terminal
        config={{
          mode: "root",
          modeText: "example.com",
          height: 300,
          edge: true,
          font: "monospace",
          text: 20
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

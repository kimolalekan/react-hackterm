import React from "react";
import ReactDOM from "react-dom";
import Terminal from "react-hackterm";

//Add theme
import "react-hackterm/dist/themes/default.css";

function App() {
  return (
    <div className="App">
      <Terminal
        config={{
          mode: "root",
          modeText: "example.com",
          width: 500,
          height: 300,
          edge: true,
          font: "monospace",
          text: 14
        }}
        command={[
          {
            name: "whoami",
            description: "Get package name",
            value: "react-hackterm"
          },
          {
            name: "pwd",
            description: "Print working directory",
            value: "/User/remote/guest/"
          }
        ]}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

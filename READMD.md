### React Terminal

Hackable terminal emulator in React

#### Milestone

- [x] Hackable Terminal UI
- [x] Terminal prefixing
- [x] Custom commands
- [] Command flags
- [] Theming

**Installation**

```

$ npm i react-hackterm

//Or use yarn
$ yarn add react-term

```

**Usage**

```js
import React from "react";
import ReactDOM from "react-dom";
import Terminal from "react-hackterm";

//Add theme
import "react-hackterm/themes/default.css";

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
          text: 14
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

**Properties**

| Property | Value                                                                                                                       | Type   |
| -------- | --------------------------------------------------------------------------------------------------------------------------- | ------ |
| config   | {<br/>mode: "root",<br/>modeText: "example.com",<br/>height: 300,<br/>edge: true,<br/>font: "monospace",<br/>text: 14<br/>} | object |
| commands | [{<br/>name: "repo",<br/>description: "Get repo", <br/>value: "https://github.com/"<br/>}]                                  | array  |

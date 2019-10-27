### React hackterm

Hackable terminal emulator in React

![Screenshot 2019-10-27 at 7 05 38 PM](https://user-images.githubusercontent.com/2352462/67639186-0e28c000-f8ed-11e9-80bb-fe02a36c8d84.png)
![Screenshot 2019-10-27 at 7 08 26 PM](https://user-images.githubusercontent.com/2352462/67639199-31ec0600-f8ed-11e9-9698-962d87b44fca.png)

#### Milestone

- [x] Hackable Terminal UI
- [x] Terminal prefixing
- [ ] Custom commands
- [ ] Command flags
- [ ] Theming
- [ ] Command history

**Installation**

```
//use npm
$ npm i react-hackterm

//use yarn
$ yarn add react-term

```

**Themes**

default, github, grass, ocean and pure.

[See available themes here](https://github.com/kimolalekan/react-hackterm/tree/master/dist/themes)

**Usage**

```js
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

**Inbuilt command**

| Commands | Value                              |
| -------- | ---------------------------------- |
| help     | Show available commands            |
| info     | About terminal                     |
| date     | Get current date                   |
| repo     | Reach hackable terminal repository |
| clear    | Show clear history                 |

**Properties**

| Property | Value                                                                                                                       | Type   |
| -------- | --------------------------------------------------------------------------------------------------------------------------- | ------ |
| config   | {<br/>mode: "root",<br/>modeText: "example.com",<br/>height: 300,<br/>edge: true,<br/>font: "monospace",<br/>text: 14<br/>} | object |
| commands | [{<br/>name: "repo",<br/>description: "Get repo", <br/>value: "https://github.com/"<br/>}]                                  | array  |

### React hackterm

Hackable terminal emulator in React

[Demo link](https://codesandbox.io/s/hackterm-demo-n5kvs)

![Screenshot 2019-10-27 at 7 05 38 PM](https://user-images.githubusercontent.com/2352462/67639186-0e28c000-f8ed-11e9-80bb-fe02a36c8d84.png)
![Screenshot 2019-10-27 at 7 08 26 PM](https://user-images.githubusercontent.com/2352462/67639199-31ec0600-f8ed-11e9-9698-962d87b44fca.png)

#### Milestone

- [x] Hackable Terminal UI
- [x] Terminal prefixing
- [x] Custom commands
- [ ] Command flags
- [x] Theming
- [ ] Command history

**Installation**

```
//use npm
$ npm i react-hackterm

//use yarn
$ yarn add react-term

```

**Themes**

Available theme: default, github, grass, ocean and pure.

**Usage**

```js
import React from "react";
import ReactDOM from "react-dom";
import Terminal from "react-hackterm";

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
        theme="pure"
        bar="macos"
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

| Property | Value                                                                                                                                       | Type   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| config   | {<br/>mode: "root",<br/>modeText: "example.com",<br/>width: 500,<br/>height: 300,<br/>edge: true,<br/>font: "monospace",<br/>text: 14<br/>} | object |
| commands | [{<br/>name: "repo",<br/>description: "Get repo", <br/>value: "https://github.com/"<br/>}]                                                  | array  |
| theme    | default, github, grass, ocean or pure.                                                                                                      | string |
| bar      | windows, macos or ubuntu                                                                                                                    | string |

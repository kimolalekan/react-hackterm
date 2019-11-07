import React from "react";
import PropTypes from "prop-types";
import cookie from "cookie_js";
import Command from "./Command";
import Prefix from "./Prefix";
import Bar from "./Bar";
import { Default, Github, Grass, Ocean, Pure } from "./themes";

class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terminalHistory: "",
      commands: [
        {
          name: "info",
          description: "Get terminal information",
          value: "Hackable terminal emulator in React"
        },
        {
          name: "repo",
          description: "Get terminal repo",
          value: "https://github.com/kimolalekan/react-hackterm.git"
        },
        {
          name: "date",
          description: "Get date",
          value: new Date()
        }
      ]
    };
  }

  setTheme(val) {
    let theme = <Default />;
    if (theme === "default") {
      theme = <Default />;
    } else if (theme === "github") {
      theme = <Github />;
    } else if (theme === "grass") {
      theme = <Grass />;
    } else if (theme === "ocean") {
      theme = <Ocean />;
    } else if (theme === "pure") {
      theme = <Pure />;
    }
    return theme;
  }

  goToBottom() {
    document.querySelector("#terminal_editor").focus();
    document.querySelector("#terminal_editor").scrollIntoView();
  }

  help(config) {
    let val = "";

    this.state.commands.forEach((item, key) => {
      let command =
        "<div><span class='command'>" +
        item.name +
        "</span> - " +
        item.description +
        "</div>";
      val += command;
    });

    let input = document.querySelector("#terminal-editor").value;
    input = input.trim();
    if (input === "help") {
      document.querySelector(".output").innerHTML +=
        "<div style='margin-bottom: 20px; font-family: " +
        config.font +
        "; font-size: " +
        config.text +
        "px;'>Available commands: <div style='margin-top: 10px'>" +
        val +
        "</div></div>";
      document.querySelector("#terminal-editor").value = "";
      this.goToBottom();
    }
  }

  clear() {
    let input = document.querySelector("#terminal-editor").value;
    input = input.trim();
    if (input === "clear") {
      document.querySelector(".output").innerHTML = "";
      document.querySelector("#terminal-editor").value = "";
      this.goToBottom();
    }
  }

  noCommand(config) {
    let input = document.querySelector("#terminal-editor").value;
    input = input.trim();

    if (input.length >= 1 && input !== "help" && input !== "clear") {
      document.querySelector(".output").innerHTML +=
        "<div style='margin-bottom: 20px; font-family: " +
        config.font +
        "; font-size: " +
        config.text +
        "px;'><span class='command'>" +
        input +
        "</span>: command not found</div>";
      document.querySelector("#terminal-editor").value = "";
      this.goToBottom();
    }
  }

  emptyCommand(config) {
    let input = document.querySelector("#terminal-editor").value;
    input = input.trim();

    if (input.length < 1) {
      document.querySelector(".output").innerHTML +=
        "<div style='width:100%'>" + Prefix(config) + "</div>";

      document.querySelector("#terminal-editor").value = "";
      this.goToBottom();
    }
  }

  realCommand() {
    let input = document.querySelector("#terminal-editor").value;
    input = input.trim();

    this.state.commands.forEach(item => {
      if (item.name === input) {
        document.querySelector(".output").innerHTML +=
          "<div style='margin-bottom: 20px'>" +
          Command(this.props.config, item.name, item.value) +
          "</div>";
        document.querySelector("#terminal-editor").value = "";
        this.goToBottom();
      }
    });
  }

  navigateHistory(e) {
    e = e || window.event;

    if (e.keyCode === 38) {
      // up arrow
      console.log("GOING UP");
    } else if (e.keyCode === 40) {
      // down arrow
      console.log("GOING DOWN");
    }
  }

  handleTerminal(e) {
    e.preventDefault();

    let input = document.querySelector("#terminal-editor").value;

    let val = [input];
    let history = cookie.get("terminal_history");
    history = history ? JSON.parse(history) : [];
    history = [...val, ...history];
    history = JSON.stringify(history);
    cookie.set("terminal_history", history);

    //If there is empty command return empty value
    this.emptyCommand(this.props.config);

    //Offer help, if command is called
    this.help(this.props.config);

    //Real commands
    this.realCommand();

    //If there is no command return default
    this.noCommand(this.props.config);

    //Clear first
    this.clear();
  }

  loadCommands() {
    let commands = this.state.commands;
    let command = this.props.command ? this.props.command : [];
    commands = [...commands, ...command];
    this.setState({ commands });
  }

  componentDidMount() {
    this.loadCommands();
  }

  render() {
    const { config, terminalHistory } = this.props;

    return (
      <div>
        {this.setTheme(config.theme)}
        <div
          className="terminal"
          style={{
            width: config.width ? config.width : "100%",
            height: config.height,
            borderRadius: config.edge ? 5 : 0
          }}
        >
          <Bar type={config.bar} />
          <div className="inner">
            <div className="output" />
            <form className="editor" onSubmit={this.handleTerminal.bind(this)}>
              <span
                className="prefix"
                style={{
                  fontFamily: `${config.font}`,
                  fontSize: config.text
                }}
              >
                {config.mode === "default" ? "$" : ""}
                {config.mode === "root" && config.modeText
                  ? `root@${config.modeText} #`
                  : ""}
                {config.mode === "custom" && config.modeText ? (
                  <span>❯</span>
                ) : (
                  ""
                )}
              </span>
              <input
                id="terminal-editor"
                className="input"
                autoComplete="off"
                spellCheck={false}
                value={terminalHistory}
                onKeyUp={this.navigateHistory}
                style={{
                  fontFamily: `${config.font}`,
                  fontSize: config.text
                }}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Terminal.propTypes = {
  config: PropTypes.object.isRequired,
  command: PropTypes.array
};

export default Terminal;

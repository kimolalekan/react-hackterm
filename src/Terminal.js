import React from "react";
import PropTypes from "prop-types";
import Command from "./Command";
import Prefix from "./Prefix";

class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commands: [
        {
          name: "info",
          description: "Get terminal information",
          value: "Welcome to React terminal"
        },
        {
          name: "repo",
          description: "Get terminal repo",
          value: "https://github.com/kimolalekan/"
        },
        {
          name: "date",
          description: "Get date",
          value: new Date()
        }
      ]
    };
  }

  goToBottom() {
    // window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo(0, document.querySelector(".terminal").scrollHeight);
    console.log("Done scrolling....");
  }

  help(config) {
    let val = "";

    this.state.commands.forEach((item, key) => {
      let command = "<div>" + item.name + " - " + item.description + "</div>";
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
        "px;'>" +
        input +
        ": command not found</div>";
      document.querySelector("#terminal-editor").value = "";
      this.goToBottom();
    }
  }

  emptyCommand(config) {
    let input = document.querySelector("#terminal-editor").value;
    input = input.trim();

    if (input.length < 1) {
      document.querySelector(".output").innerHTML +=
        "<div>" + Prefix(config) + "</div>";

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

  handleTerminal(e) {
    e.preventDefault();

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
    let command = this.props.commands ? this.props.commands : [];
    commands = [...commands, ...command];
    this.setState({ commands });
  }

  render() {
    const { config } = this.props;

    return (
      <div
        className="terminal"
        style={{
          height: config.height,
          borderRadius: config.edge ? 5 : 0
        }}
      >
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
                ? `root@${config.modeText}#`
                : ""}
              {config.mode === "custom" && config.modeText
                ? config.modeText
                : ""}
            </span>
            <input
              autoComplete="off"
              className="input"
              id="terminal-editor"
              spellCheck={false}
              style={{
                fontFamily: `${config.font}`,
                fontSize: config.text
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

Terminal.propTypes = {
  command: PropTypes.object,
  config: PropTypes.object.isRequired
};

export default Terminal;

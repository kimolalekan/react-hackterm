"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cookie_js = require("cookie_js");

var _cookie_js2 = _interopRequireDefault(_cookie_js);

var _Command = require("./Command");

var _Command2 = _interopRequireDefault(_Command);

var _Prefix = require("./Prefix");

var _Prefix2 = _interopRequireDefault(_Prefix);

var _Bar = require("./Bar");

var _Bar2 = _interopRequireDefault(_Bar);

var _themes = require("./themes");

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Terminal = function (_React$Component) {
  _inherits(Terminal, _React$Component);

  function Terminal(props) {
    _classCallCheck(this, Terminal);

    var _this = _possibleConstructorReturn(this, (Terminal.__proto__ || Object.getPrototypeOf(Terminal)).call(this, props));

    _this.state = {
      terminalHistory: "",
      commands: [{
        name: "info",
        description: "Get terminal information",
        value: "Hackable terminal emulator in React"
      }, {
        name: "repo",
        description: "Get terminal repo",
        value: "https://github.com/kimolalekan/react-hackterm.git"
      }, {
        name: "date",
        description: "Get date",
        value: new Date()
      }]
    };
    return _this;
  }

  _createClass(Terminal, [{
    key: "goToBottom",
    value: function goToBottom() {
      document.querySelector("#terminal_editor").focus();
      document.querySelector("#terminal_editor").scrollIntoView();
    }
  }, {
    key: "help",
    value: function help(config) {
      var val = "";

      this.state.commands.forEach(function (item, key) {
        var command = "<div><span class='command'>" + item.name + "</span> - " + item.description + "</div>";
        val += command;
      });

      var input = document.querySelector("#terminal-editor").value;
      input = input.trim();
      if (input === "help") {
        document.querySelector(".output").innerHTML += "<div style='margin-bottom: 20px; font-family: " + config.font + "; font-size: " + config.text + "px;'>Available commands: <div style='margin-top: 10px'>" + val + "</div></div>";
        document.querySelector("#terminal-editor").value = "";
        this.goToBottom();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var input = document.querySelector("#terminal-editor").value;
      input = input.trim();
      if (input === "clear") {
        document.querySelector(".output").innerHTML = "";
        document.querySelector("#terminal-editor").value = "";
        this.goToBottom();
      }
    }
  }, {
    key: "noCommand",
    value: function noCommand(config) {
      var input = document.querySelector("#terminal-editor").value;
      input = input.trim();

      if (input.length >= 1 && input !== "help" && input !== "clear") {
        document.querySelector(".output").innerHTML += "<div style='margin-bottom: 20px; font-family: " + config.font + "; font-size: " + config.text + "px;'><span class='command'>" + input + "</span>: command not found</div>";
        document.querySelector("#terminal-editor").value = "";
        this.goToBottom();
      }
    }
  }, {
    key: "emptyCommand",
    value: function emptyCommand(config) {
      var input = document.querySelector("#terminal-editor").value;
      input = input.trim();

      if (input.length < 1) {
        document.querySelector(".output").innerHTML += "<div style='width:100%'>" + (0, _Prefix2.default)(config) + "</div>";

        document.querySelector("#terminal-editor").value = "";
        this.goToBottom();
      }
    }
  }, {
    key: "realCommand",
    value: function realCommand() {
      var _this2 = this;

      var input = document.querySelector("#terminal-editor").value;
      input = input.trim();

      this.state.commands.forEach(function (item) {
        if (item.name === input) {
          document.querySelector(".output").innerHTML += "<div style='margin-bottom: 20px'>" + (0, _Command2.default)(_this2.props.config, item.name, item.value) + "</div>";
          document.querySelector("#terminal-editor").value = "";
          _this2.goToBottom();
        }
      });
    }
  }, {
    key: "navigateHistory",
    value: function navigateHistory(e) {
      e = e || window.event;

      if (e.keyCode === 38) {
        // up arrow
        console.log("GOING UP");
      } else if (e.keyCode === 40) {
        // down arrow
        console.log("GOING DOWN");
      }
    }
  }, {
    key: "handleTerminal",
    value: function handleTerminal(e) {
      e.preventDefault();

      var input = document.querySelector("#terminal-editor").value;

      var val = [input];
      var history = _cookie_js2.default.get("terminal_history");
      history = history ? JSON.parse(history) : [];
      history = [].concat(val, _toConsumableArray(history));
      history = JSON.stringify(history);
      _cookie_js2.default.set("terminal_history", history);

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
  }, {
    key: "loadCommands",
    value: function loadCommands() {
      var commands = this.state.commands;
      var command = this.props.command ? this.props.command : [];
      commands = [].concat(_toConsumableArray(commands), _toConsumableArray(command));
      this.setState({ commands: commands });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadCommands();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
        bar = _props.bar,
        config = _props.config,
        terminalHistory = _props.terminalHistory,
        theme = _props.theme;


      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_themes2.default, { value: bar }),
        _react2.default.createElement(
          "div",
          {
            className: "terminal",
            style: {
              width: config.width ? config.width : "100%",
              height: config.height,
              borderRadius: config.edge ? 5 : 0
            }
          },
          _react2.default.createElement(_Bar2.default, { type: bar }),
          _react2.default.createElement(
            "div",
            { className: "inner" },
            _react2.default.createElement("div", { className: "output" }),
            _react2.default.createElement(
              "form",
              { className: "editor", onSubmit: this.handleTerminal.bind(this) },
              _react2.default.createElement(
                "span",
                {
                  className: "prefix",
                  style: {
                    fontFamily: "" + config.font,
                    fontSize: config.text
                  }
                },
                config.mode === "default" ? "$" : "",
                config.mode === "root" && config.modeText ? "root@" + config.modeText + " #" : "",
                config.mode === "custom" && config.modeText ? _react2.default.createElement(
                  "span",
                  null,
                  "\u276F"
                ) : ""
              ),
              _react2.default.createElement("input", {
                id: "terminal-editor",
                className: "input",
                autoComplete: "off",
                spellCheck: false,
                value: terminalHistory,
                onKeyUp: this.navigateHistory,
                style: {
                  fontFamily: "" + config.font,
                  fontSize: config.text
                }
              })
            )
          )
        )
      );
    }
  }]);

  return Terminal;
}(_react2.default.Component);

Terminal.propTypes = {
  bar: _propTypes2.default.string,
  config: _propTypes2.default.object.isRequired,
  command: _propTypes2.default.array,
  theme: _propTypes2.default.string
};

exports.default = Terminal;
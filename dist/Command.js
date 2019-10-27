"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Prefix = require("./Prefix");

var _Prefix2 = _interopRequireDefault(_Prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Command = function Command(config, command, value) {
  return "<div className=\"output-shell\">\n    " + (0, _Prefix2.default)(config) + "\n    <span class=\"command\" style=\"font-family: " + config.font + "; font-size: " + config.text + "px;\">" + command + "</span>\n    <div style=\"font-family: " + config.font + "; font-size: " + config.text + "px;\">" + value + "</div>\n  </div>";
};

exports.default = Command;
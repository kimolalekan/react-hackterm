"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = function prefix(config) {
  var val = void 0;
  if (config.mode === "default") {
    val = "$";
  } else if (config.mode === "root" && config.modeText) {
    val = "root@" + config.modeText + "#";
  } else if (config.mode === "custom") {
    val = "\u276F";
  }
  return val;
};

var Prefix = function Prefix(config) {
  return "<span\n      class=\"prefix\"\n      style=\"padding-right: 10px; font-family: " + config.font + "; font-size: " + config.text + "px;\">\n   " + prefix(config) + "\n    </span>";
};

exports.default = Prefix;
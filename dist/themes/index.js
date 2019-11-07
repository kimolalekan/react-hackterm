"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Default = require("./Default");

var _Default2 = _interopRequireDefault(_Default);

var _Github = require("./Github");

var _Github2 = _interopRequireDefault(_Github);

var _Grass = require("./Grass");

var _Grass2 = _interopRequireDefault(_Grass);

var _Ocean = require("./Ocean");

var _Ocean2 = _interopRequireDefault(_Ocean);

var _Pure = require("./Pure");

var _Pure2 = _interopRequireDefault(_Pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setTheme(val) {
  var theme = _react2.default.createElement(_Default2.default, null);
  if (theme === "default") {
    theme = _react2.default.createElement(_Default2.default, null);
  } else if (theme === "github") {
    theme = _react2.default.createElement(_Github2.default, null);
  } else if (theme === "grass") {
    theme = _react2.default.createElement(_Grass2.default, null);
  } else if (theme === "ocean") {
    theme = _react2.default.createElement(_Ocean2.default, null);
  } else if (theme === "pure") {
    theme = _react2.default.createElement(_Pure2.default, null);
  }
  return theme;
}

var Theme = function Theme(_ref) {
  var value = _ref.value;
  return _react2.default.createElement(
    "div",
    null,
    setTheme(value)
  );
};

Theme.propTypes = {
  value: _propTypes2.default.string.isRequired
};
exports.default = Theme;
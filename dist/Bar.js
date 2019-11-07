"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Macos = _react2.default.createElement(
  "div",
  { className: "bar" },
  _react2.default.createElement(
    "div",
    { className: "ios" },
    _react2.default.createElement(
      "span",
      { className: "close" },
      _react2.default.createElement(
        "span",
        null,
        "x"
      )
    ),
    _react2.default.createElement(
      "span",
      { className: "minimize" },
      _react2.default.createElement(
        "span",
        null,
        "\u2013"
      )
    ),
    _react2.default.createElement(
      "span",
      { className: "fullscreen" },
      _react2.default.createElement(
        "span",
        null,
        "\u2195"
      )
    )
  )
);

var Windows = _react2.default.createElement(
  "div",
  { className: "bar" },
  _react2.default.createElement(
    "div",
    { className: "inner" },
    _react2.default.createElement(
      "div",
      { className: "windows" },
      _react2.default.createElement(
        "span",
        { className: "minimize" },
        _react2.default.createElement(
          "span",
          null,
          "\u2013"
        )
      ),
      _react2.default.createElement(
        "span",
        { className: "fullscreen" },
        _react2.default.createElement(
          "span",
          null,
          "\u26F6"
        )
      ),
      _react2.default.createElement(
        "span",
        { className: "close" },
        _react2.default.createElement(
          "span",
          null,
          "x"
        )
      )
    )
  ),
  _react2.default.createElement("span", { style: { height: 50, display: "block" } })
);

var Ubuntu = _react2.default.createElement(
  "div",
  { className: "bar" },
  _react2.default.createElement(
    "div",
    { className: "ubuntu" },
    _react2.default.createElement(
      "span",
      { className: "close" },
      _react2.default.createElement(
        "span",
        null,
        "x"
      )
    ),
    _react2.default.createElement(
      "span",
      { className: "minimize" },
      _react2.default.createElement(
        "span",
        null,
        "\u2013"
      )
    ),
    _react2.default.createElement(
      "span",
      { className: "fullscreen" },
      _react2.default.createElement(
        "span",
        null,
        "\u26F6"
      )
    )
  )
);

var Bar = function Bar(_ref) {
  var type = _ref.type;
  return _react2.default.createElement(
    "div",
    null,
    type === "macos" ? Macos : "",
    type === "windows" ? Windows : "",
    type === "ubuntu" ? Ubuntu : ""
  );
};

Bar.propTypes = {
  type: _propTypes2.default.string.isRequired
};
exports.default = Bar;
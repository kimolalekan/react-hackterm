import React from "react";
import PropTypes from "prop-types";

const Macos = (
  <div className="bar">
    <div className="ios">
      <span className="close">
        <span>x</span>
      </span>
      <span className="minimize">
        <span>&ndash;</span>
      </span>
      <span className="fullscreen">
        <span>&#8597;</span>
      </span>
    </div>
  </div>
);

const Windows = (
  <div className="bar">
    <div className="inner">
      <div className="windows">
        <span className="minimize">
          <span>&ndash;</span>
        </span>
        <span className="fullscreen">
          <span>&#9974;</span>
        </span>
        <span className="close">
          <span>x</span>
        </span>
      </div>
    </div>
    <span style={{ height: 50, display: "block" }} />
  </div>
);

const Ubuntu = (
  <div className="bar">
    <div className="ubuntu">
      <span className="close">
        <span>x</span>
      </span>
      <span className="minimize">
        <span>&ndash;</span>
      </span>
      <span className="fullscreen">
        <span>&#9974;</span>
      </span>
    </div>
  </div>
);

const Bar = ({ type }) => (
  <div>
    {type === "macos" ? Macos : ""}
    {type === "windows" ? Windows : ""}
    {type === "ubuntu" ? Ubuntu : ""}
  </div>
);

Bar.propTypes = {
  type: PropTypes.string.isRequired
};
export default Bar;

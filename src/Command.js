import React from "react";
import Prefix from "./Prefix";

const Command = (config, command, value) => {
  return `<div className="output-shell">
    ${Prefix(config)}
    <span style="font-family: ${config.font}; font-size: ${
  config.text
}px;">${command}</span>
    <div style="font-family: ${config.font}; font-size: ${
  config.text
}px;">${value}</div>
  </div>`;
};

export default Command;

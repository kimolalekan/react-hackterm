import React from "react";

const prefix = config => {
  let val;
  if (config.mode === "default") {
    val = "$";
  } else if (config.mode === "root" && config.modeText) {
    val = "root@" + config.modeText + " #";
  } else if (config.mode === "custom") {
    val = ` ❯`;
  }
  return val;
};

const Prefix = config => {
  return `<span
      class="prefix"
      style="padding-right: 10px; font-family: ${config.font}; font-size: ${
    config.text
  }px;">
   ${prefix(config)}
    </span>`;
};

export default Prefix;

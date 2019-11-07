import React from "react";
import PropTypes from "prop-types";
import Default from "./Default";
import Github from "./Github";
import Grass from "./Grass";
import Ocean from "./Ocean";
import Pure from "./Pure";

function setTheme(val) {
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

const Theme = ({ value }) => <div>{setTheme(value)}</div>;

Theme.propTypes = {
  value: PropTypes.string.isRequired
};
export default Theme;

import React from "react";
import PropTypes from "prop-types";
import Default from "./Default";
import Github from "./Github";
import Grass from "./Grass";
import Ocean from "./Ocean";
import Pure from "./Pure";

const Theme = ({ value }) => (
  <div>
    {value === "default" ? <Default /> : ""}
    {value === "github" ? <Github /> : ""}
    {value === "grass" ? <Grass /> : ""}
    {value === "ocean" ? <Ocean /> : ""}
    {value === "pure" ? <Pure /> : ""}
    {!value ? <Default /> : ""}
  </div>
);

Theme.propTypes = {
  value: PropTypes.string.isRequired
};
export default Theme;

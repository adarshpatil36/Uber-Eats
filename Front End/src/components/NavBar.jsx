import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";

function NavBar() {
  return (
    <div className="NavBar">
      <Logo />
      <input placeholder="Mode"></input>
      <input placeholder="Address"></input>
      <input placeholder="Description"></input>
    </div>
  );
}

export default NavBar;

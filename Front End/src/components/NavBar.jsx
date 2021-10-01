import React from "react";
import { CONSTANTS } from "../constants/constants";
import Logo from "./Logo";

const NavBar = ({ userData, changeActiveTab }) => {
  const logout = () => {
    localStorage.setItem("token", "");
    changeActiveTab(CONSTANTS.LOGIN_TAB);
  };
  return (
    <div className="NavBar">
      <Logo />
      <input placeholder="Mode"></input>
      <input placeholder="Address"></input>
      <input placeholder="Description"></input>

      <button onClick={logout}>Logout</button>
      {userData.isRestaurant ? (
        <>
          <div className="restLogo"> </div>
          <span>{userData.user}</span>
        </>
      ) : (
        <>
          <div className="userLogo"> </div>
          <span>{userData.firstName}</span>
        </>
      )}
    </div>
  );
};

export default NavBar;

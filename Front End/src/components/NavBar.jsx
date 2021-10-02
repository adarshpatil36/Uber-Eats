import React from "react";
import { connect } from "react-redux";
import { ACTION_TYPE } from "../actions/ActionTypes";
import { CONSTANTS } from "../constants/constants";
import Logo from "./Logo";

const NavBar = ({ userData, changeActiveTab }) => {
  const logout = () => {
    localStorage.setItem("token", "");
    changeActiveTab(CONSTANTS.LOGIN_TAB);
    window.location.href = "http://localhost:3000/login";
  };
  return (
    userData && (
      <div className="NavBar">
        <Logo />
        <input placeholder="Mode"></input>
        <input placeholder="Address"></input>
        <input placeholder="Description"></input>

        <button onClick={logout}>Logout</button>
        {userData.isRestaurant ? (
          <>
            <div className="restLogo"> </div>
            <span>{userData.uname}</span>
          </>
        ) : (
          <>
            <div className="userLogo"> </div>
            <span>{userData.uname}</span>
          </>
        )}
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  userData: state.data.userData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (tabID) =>
      dispatch({ type: ACTION_TYPE.SET_ACTIVE_TAB, value: tabID }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

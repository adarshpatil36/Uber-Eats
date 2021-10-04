import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { ACTION_TYPE } from "../actions/ActionTypes";
import { CONSTANTS } from "../constants/constants";
import Logo from "./Logo";

const NavBar = ({ userData, logout, changeActiveTab }) => {
  const history = useHistory();
  const onLogout = () => {
    localStorage.setItem("token", "");
    changeActiveTab(CONSTANTS.LOGIN_TAB);
    logout();
    history.push("/login");
  };
  return (
    userData && (
      <div className="NavBar">
        <Logo />
        <input placeholder="Mode"></input>
        <input placeholder="Address"></input>
        <input placeholder="What are your carvings?" type="search"></input>

        <button onClick={onLogout}>Logout</button>
        {userData.isRestaurant.toString() === "true" ? (
          <div>
            <div className="restLogo"> </div>
            <span>{userData.uname || userData.user}</span>
          </div>
        ) : (
          <div>
            <div className="userLogo"></div>
            <div>{userData.uname || userData.user}</div>
          </div>
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
    logout: () => dispatch({ type: ACTION_TYPE.CLEAR_USER_DATA }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

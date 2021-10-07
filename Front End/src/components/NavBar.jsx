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
  const redirectToOrder = () => {
    history.push("/pastOrders");
  };
  return (
    userData && (
      <div className="NavBar">
        <Logo />
        <input placeholder="Mode"></input>
        <input placeholder="Address"></input>
        <input placeholder="What are your cravings?" type="search"></input>
        <span className="loginIcon">
          {userData?.isRestaurant?.toString() === "true" ? (
            <div>
              <img
                src="https://us.123rf.com/450wm/friendesigns/friendesigns1902/friendesigns190200738/117794294-modern-kitchen-logo.jpg?ver=6"
                alt="res logo"
              />
              <span>{userData.uname || userData.user}</span>
            </div>
          ) : (
            <div>
              <img
                src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                alt="user logo"
              />
              <span>{userData.uname || userData.user}</span>
            </div>
          )}
          <button onClick={redirectToOrder}>My Orders</button>
          <button onClick={onLogout}>Logout</button>
        </span>
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

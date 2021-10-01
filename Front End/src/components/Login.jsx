import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { ACTION_TYPE } from "../actions/ActionTypes";
import Logo from "./Logo";
import { CONSTANTS } from "../constants/constants";

export const Login = ({ changeActiveTab, loginUser }) => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const signUpTab = () => {
    changeActiveTab(CONSTANTS.CUSTOMER_SIGNUP);
  };

  const registerRestaurant = () => {
    changeActiveTab(CONSTANTS.RESTAURANT_SIGNUP);
  };

  const handleChange = (e) => {
    console.log(e);
    switch (e.target.id) {
      case "uname":
        setUname(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const login = () => {
    const data = { uname, password };
    console.log("Post Data", data);
    axios.post("http://localhost:8080/login", data).then((res) => {
      if (res.data.length !== 0) {
        console.log("Data posted Successful ");
        loginUser(res.data[0]);
        changeActiveTab(CONSTANTS.DASHBOARD);
      } else {
        console.log("Data post failed ");
      }
    });
  };

  return (
    <div className="login">
      <Logo />

      <div className="loginTab">
        <h5>Welcome Back {loginUser} </h5>
        <span>Sign in with your email address or user name.</span>
        <input
          id="uname"
          placeholder="User Name"
          onChange={handleChange}
        ></input>
        <input
          id="password"
          placeholder="Password"
          onChange={handleChange}
        ></input>
        <button onClick={login}>Next</button>
        <p>
          New to Uber?
          <span onClick={() => signUpTab()}> Create an account</span>
        </p>
        <p>
          Register a restaurant @ Uber?
          <span onClick={() => registerRestaurant()}> Register restaurant</span>
        </p>
      </div>
      <footer>
        <h1>© 2020 Uber Technologies, Inc.</h1>
        <h1>Privacy Policy | Terms of Use</h1>
      </footer>
    </div>
  );
};

Login.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => {
  return {
    loginUser: state.data.loginUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (tabID) =>
      dispatch({ type: ACTION_TYPE.SET_ACTIVE_TAB, value: tabID }),
    loginUser: (data) =>
      dispatch({ type: ACTION_TYPE.SET_LOGIN_DATA, value: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

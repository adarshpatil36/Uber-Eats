import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { ACTION_TYPE } from "../actions/ActionTypes";
import Logo from "./Logo";
import { useHistory } from "react-router-dom";
import { CONSTANTS } from "../constants/constants";
import FooterCard from "./FooterCard";

export const Login = ({ changeActiveTab, loginUser }) => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const signUpTab = () => {
    changeActiveTab(CONSTANTS.CUSTOMER_SIGNUP);
    history.push("/signup");
  };

  const registerRestaurant = () => {
    changeActiveTab(CONSTANTS.RESTAURANT_SIGNUP);
    history.push("/signup");
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
    axios.post("http://localhost:8080/login", data).then((res) => {
      if (res.status === 200) {
        const postData = { ...res["data"] };
        localStorage.setItem("token", JSON.stringify(postData["token"]));
        loginUser(postData["userData"][0]);
        changeActiveTab(CONSTANTS.DASHBOARD);
        history.push("/dashboard");
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
        <span>Sign in with your user name or email address.</span>
        <input
          id="uname"
          placeholder="User Name / Email / Restaurant ID"
          onChange={handleChange}
        ></input>
        <>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          ></input>
          {/* {<span className="errorMessage"> Invalid Credentials </span>} */}
        </>
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
      <FooterCard />
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

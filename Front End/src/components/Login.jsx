import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { ACTION_TYPE } from "../actions/ActionTypes";

export const Login = ({ changeActiveTab, loginUser }) => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const signUpTab = () => {
    changeActiveTab(1);
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
      if (res.data === "Okay") {
        console.log("Data posted Successful ");
      } else {
        console.log("Data post failed ");
      }
    });
  };

  return (
    <div className="login">
      <img
        src="https://d1a3f4spazzrp4.cloudfront.net/arch-frontend/1.1.1/d1a3f4spazzrp4.cloudfront.net/eats/eats-logo-1a01872c77.svg"
        alt=""
      ></img>

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
    loginUser: state.loginReducer.loginUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (tabID) =>
      dispatch({ type: ACTION_TYPE.SET_ACTIVE_TAB, value: tabID }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

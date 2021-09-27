import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ACTION_TYPE } from "../actions/ActionTypes";
import { CustomerSignup } from "./CustomerSignup";
import axios from "axios";

export const Login = ({ activeTab, loginUser, changeActiveTab }) => {
  const [uname, setUname] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const signUpTab = () => {
    changeActiveTab(1);
  };
  const loginTab = () => {
    changeActiveTab(0);
  };

  const getLoginTab = () => {
    return (
      <div class="loginTab">
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
    );
  };
  const getActiveTabContent = () => {
    switch (activeTab) {
      case 0:
        return getLoginTab();
      case 1:
        return <CustomerSignup loginTab={loginTab} />;
      default:
        getLoginTab();
    }
  };
  return (
    <div class="login">
      <img
        src="https://d1a3f4spazzrp4.cloudfront.net/arch-frontend/1.1.1/d1a3f4spazzrp4.cloudfront.net/eats/eats-logo-1a01872c77.svg"
        alt=""
      ></img>

      {getActiveTabContent()}
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

const mapStateToProps = (state) => ({
  activeTab: state.loginReducer.activeTab,
  loginUser: state.loginReducer.loginUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (tabID) =>
      dispatch({ type: ACTION_TYPE.SET_ACTIVE_TAB, value: tabID }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ACTION_TYPE } from "../actions/ActionTypes";

export const Login = ({ activeTab, loginUser, changeActiveTab }) => {
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
        <span>Sign in with your email address or mobile number.</span>
        <input placeholder="Email or Mobile Number"></input>
        <button>Next</button>
        <p>
          New to Uber?
          <span onClick={() => signUpTab()}> Create an account</span>
        </p>
      </div>
    );
  };
  const getSignupTab = () => {
    return (
      <div class="loginTab">
        <h5>Let's get started {loginUser} </h5>
        <span>Enter your phone number (required)</span>
        <input placeholder="Enter Mobile Number"></input>
        <button>Next</button>
        <p>
          Already use Uber?
          <span onClick={() => loginTab()}> Sign in</span>
        </p>
      </div>
    );
  };
  const getActiveTabContent = () => {
    switch (activeTab) {
      case 0:
        return getLoginTab();
      case 1:
        return getSignupTab();
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

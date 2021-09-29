import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ACTION_TYPE } from "../actions/ActionTypes";
import { CustomerSignup } from "./CustomerSignup";
import axios from "axios";
import Login from "./Login";

export const Root = ({ activeTab, loginUser, changeActiveTab }) => {
  const loginTab = () => {
    changeActiveTab(0);
  };

  const getLoginTab = () => {
    return <Login></Login>;
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
  return <>{getActiveTabContent()}</>;
};

Root.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({
  activeTab: state.loginReducer.activeTab,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (tabID) =>
      dispatch({ type: ACTION_TYPE.SET_ACTIVE_TAB, value: tabID }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);

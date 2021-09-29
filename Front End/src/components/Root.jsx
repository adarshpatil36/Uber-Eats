import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ACTION_TYPE } from "../actions/ActionTypes";
import { CustomerSignup } from "./CustomerSignup";
import Login from "./Login";
import { Dashboard } from "./Dashboard";

export const Root = ({ activeTab, loginUser, changeActiveTab }) => {
  const loginTab = () => {
    changeActiveTab(0);
  };

  const getLoginTab = () => {
    return <Login></Login>;
  };
  const getActiveTabContent = () => {
    switch (activeTab) {
      case 3:
        return getLoginTab();
      case 1:
        return <CustomerSignup loginTab={loginTab} />;
      case 0:
        return <Dashboard />;
      default:
        return <></>;
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

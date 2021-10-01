import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ACTION_TYPE } from "../actions/ActionTypes";
import { CustomerSignup } from "./CustomerSignup";
import Login from "./Login";
import { Dashboard } from "./Dashboard";
import { RestaurantSignup } from "./RestaurantSignup";
import { CONSTANTS } from "../constants/constants";
import Signup from "./Signup";

export const Root = ({ activeTab, loginUser, changeActiveTab }) => {
  const loginTab = () => {
    changeActiveTab(CONSTANTS.LOGIN_TAB);
  };

  const getLoginTab = () => {
    return <Login></Login>;
  };
  const getActiveTabContent = () => {
    switch (activeTab) {
      case CONSTANTS.LOGIN_TAB:
        return getLoginTab();
      case CONSTANTS.CUSTOMER_SIGNUP:
        return <Signup loginTab={loginTab} changeActiveTab={changeActiveTab} />;
      case CONSTANTS.RESTAURANT_SIGNUP:
        return (
          <Signup
            loginTab={loginTab}
            changeActiveTab={changeActiveTab}
            isRestaurant
          />
        );
      case CONSTANTS.DASHBOARD:
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
  activeTab: state.data.activeTab,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (tabID) =>
      dispatch({ type: ACTION_TYPE.SET_ACTIVE_TAB, value: tabID }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);

import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { CONSTANTS } from "../constants/constants";
import RestaurantSignup from "./RestaurantSignup";
import { CustomerSignup } from "./CustomerSignup";
import { ACTION_TYPE } from "../actions/ActionTypes";
import { useHistory } from "react-router";

export const Signup = ({
  changeActiveTab,
  isRestaurant,
  activeTab,
  loginUser,
}) => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    uname: "",
    address: "",
    email: "",
    password: "",
    confPassword: "",
    mob: "",
  });
  let history = useHistory();

  const loginTab = () => {
    history.push("./login");
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const signUp = async () => {
    const { confPassword, ...postData } = data;
    postData["isRestaurant"] = !!isRestaurant;
    await axios.post("http://localhost:8080/adduser", postData).then((res) => {
      if (res.status === 200) {
        loginUser(postData);
        changeActiveTab(CONSTANTS.DASHBOARD);
        history.push("/dashboard");
      } else {
        console.log("Data post failed ");
      }
    });
  };

  return (
    <>
      {isRestaurant ? (
        <RestaurantSignup
          loginTab={loginTab}
          handleChange={handleChange}
          signUp={signUp}
          data={data}
        />
      ) : (
        <CustomerSignup
          loginTab={loginTab}
          handleChange={handleChange}
          signUp={signUp}
          data={data}
        />
      )}
    </>
  );
};

Signup.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({
  activeTab: state.data.activeTab,
  isRestaurant: state.data.activeTab === CONSTANTS.RESTAURANT_SIGNUP,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (tabID) =>
      dispatch({ type: ACTION_TYPE.SET_ACTIVE_TAB, value: tabID }),
    loginUser: (data) =>
      dispatch({ type: ACTION_TYPE.SET_LOGIN_DATA, value: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

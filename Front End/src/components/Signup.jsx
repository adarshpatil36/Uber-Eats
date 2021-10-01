import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import Logo from "./Logo";
import { CONSTANTS } from "../constants/constants";
import RestaurantSignup from "./RestaurantSignup";
import { CustomerSignup } from "./CustomerSignup";
import { ACTION_TYPE } from "../actions/ActionTypes";

export const Signup = ({
  loginTab,
  changeActiveTab,
  isRestaurant,
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const signUp = async () => {
    const { confPassword, ...postData } = data;
    postData["isRestaurant"] = isRestaurant;
    await axios.post("http://localhost:8080/adduser", postData).then((res) => {
      if (res.status === 200) {
        // loginUser(postData);
        changeActiveTab(CONSTANTS.DASHBOARD);
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) =>
      dispatch({ type: ACTION_TYPE.SET_LOGIN_DATA, value: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

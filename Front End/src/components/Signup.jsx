import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import Logo from "./Logo";
import { CONSTANTS } from "../constants/constants";
import RestaurantSignup from "./RestaurantSignup";
import { CustomerSignup } from "./CustomerSignup";

export const Signup = ({ loginTab, changeActiveTab, isRestaurant }) => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    uname: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const handleChange = (e) => {
    console.log(e);
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const signUp = () => {
    const { confPassword, ...postData } = data;
    postData["isRestaurant"] = isRestaurant;
    axios.post("http://localhost:8080/adduser", postData).then((res) => {
      if (res.status === 200) {
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

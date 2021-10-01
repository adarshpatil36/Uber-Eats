import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import Logo from "./Logo";
import { CONSTANTS } from "../constants/constants";

export const RestaurantSignup = ({ loginTab, changeActiveTab }) => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    uname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e);
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const signUp = () => {
    console.log("Post Data", data);
    axios.post("http://localhost:8080/adduser", data).then((res) => {
      if (res.data === "Okay") {
        changeActiveTab(CONSTANTS.DASHBOARD);
      } else {
        console.log("Data post failed ");
      }
    });
  };

  return (
    <div className="login">
      <Logo />
      <div className="loginTab">
        <h5>Let's get started </h5>
        <input
          id="fname"
          placeholder="First Name"
          value={data["fname"]}
          onChange={handleChange}
        ></input>
        <input
          id="lname"
          placeholder="Last Name"
          value={data["lname"]}
          onChange={handleChange}
        ></input>
        <input
          id="uname"
          placeholder="User Name"
          value={data["uname"]}
          onChange={handleChange}
        ></input>
        <input
          id="email"
          placeholder="Email ID"
          value={data["email"]}
          onChange={handleChange}
        ></input>
        <input
          id="password"
          placeholder="Password"
          value={data["password"]}
          onChange={handleChange}
        ></input>
        <button onClick={signUp}>Next</button>
        <p>
          Already registered on Uber?
          <span onClick={() => loginTab()}> Sign in</span>
        </p>
      </div>
    </div>
  );
};

RestaurantSignup.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSignup);

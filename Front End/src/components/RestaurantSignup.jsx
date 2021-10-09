import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Logo from "./Logo";
import { ACTION_TYPE } from "../actions/ActionTypes";
import { CONSTANTS } from "../constants/constants";
import { useHistory } from "react-router";
import axios from "axios";

const RestaurantSignup = ({ changeActiveTab, loginUser }) => {
  const [data, setData] = useState({
    name: "",
    description: "",
    timings: "",
    address: "",
    country: "",
    contact: "",
    email: "",
    password: "",
    confPassword: "",
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
    postData["isRestaurant"] = true;
    await axios
      .post("http://localhost:8080/restaurant", postData)
      .then((res) => {
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
    <div className="login">
      <Logo />
      <div className="loginTab">
        <h5>Let's start with restaurant details </h5>
        <input
          id="name"
          placeholder="Restaurant Name"
          value={data["name"]}
          onChange={handleChange}
        ></input>
        <input
          id="description"
          placeholder="Description"
          value={data["description"]}
          onChange={handleChange}
        ></input>
        <input
          id="timings"
          placeholder="Timings"
          value={data["timings"]}
          onChange={handleChange}
        ></input>
        <input
          id="address"
          placeholder="Address"
          value={data["address"]}
          onChange={handleChange}
        ></input>
        <input
          id="country"
          placeholder="Country"
          value={data["country"]}
          onChange={handleChange}
        ></input>
        <input
          id="contact"
          placeholder="Mobile Number"
          value={data["contact"]}
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
          type="password"
          placeholder="Password"
          value={data["password"]}
          onChange={handleChange}
        ></input>
        <input
          id="confPassword"
          type="password"
          placeholder="Confirm Password"
          value={data["confPassword"]}
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

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSignup);

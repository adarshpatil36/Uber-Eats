import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Logo from "./Logo";

export const RestaurantSignup = ({ loginTab, data, handleChange, signUp }) => {
  return (
    <div className="login">
      <Logo />
      <div className="loginTab">
        <h5>Let's start with restaurant details </h5>
        <input
          id="fname"
          placeholder="Owner First Name"
          value={data["fname"]}
          onChange={handleChange}
        ></input>
        <input
          id="lname"
          placeholder="Owner Last Name"
          value={data["lname"]}
          onChange={handleChange}
        ></input>
        <input
          id="uname"
          placeholder="Restaurant Name"
          value={data["uname"]}
          onChange={handleChange}
        ></input>
        <input
          id="address"
          placeholder="Address"
          value={data["address"]}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSignup);

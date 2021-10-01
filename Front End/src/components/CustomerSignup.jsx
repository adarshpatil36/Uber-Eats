import React from "react";
import PropTypes from "prop-types";

import Logo from "./Logo";

export const CustomerSignup = ({ loginTab, handleChange, signUp, data }) => {
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
          id="address"
          placeholder="Address"
          value={data["address"]}
          onChange={handleChange}
        ></input>
        <input
          id="mob"
          placeholder="Mobile Number"
          value={data["mob"]}
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
          Already use Uber?
          <span onClick={() => loginTab()}> Sign in</span>
        </p>
      </div>
    </div>
  );
};

CustomerSignup.propTypes = {
  props: PropTypes,
};

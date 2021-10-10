import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

import Logo from "./Logo";
import { useHistory } from "react-router";
import axios from "axios";
import { CONSTANTS } from "../constants/constants";
import { ACTION_TYPE } from "../actions/ActionTypes";
import { connect } from "react-redux";

const CustomerSignup = ({ changeActiveTab, loginUser }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    user: "",
    address: "",
    email: "",
    password: "",
    contact: "",
    country: "",
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
    await axios.post("http://localhost:8080/users", postData).then((res) => {
      if (res.status === 200) {
        postData["id"] = res.data.id;
        loginUser(postData);
        changeActiveTab(CONSTANTS.DASHBOARD);
        history.push("/dashboard");
      } else {
        console.log("Data post failed ");
      }
    });
  };
  const redirectToLogin = () => {
    history.push("/login");
  };

  return (
    <div className="login">
      <Logo navigateTo={redirectToLogin} />
      <div className="loginTab">
        <h5>Let's get started </h5>
        <Form>
          <Form.Group className="mb-8">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              id="firstName"
              placeholder="First Name"
              value={data["firstName"]}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-8">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              id="lastName"
              placeholder="Last Name"
              value={data["lastName"]}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-8">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              id="user"
              placeholder="User Name"
              value={data["user"]}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-8">
            <Form.Label>Address</Form.Label>
            <Form.Control
              id="address"
              placeholder="Address"
              value={data["address"]}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-8">
            <Form.Label>Country</Form.Label>
            <Form.Control
              id="country"
              placeholder="Country"
              value={data["country"]}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-8">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              id="contact"
              placeholder="Mobile Number"
              value={data["contact"]}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-8" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="email"
              placeholder="Email ID"
              value={data["email"]}
              onChange={handleChange}
              type="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              placeholder="Password"
              value={data["password"]}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>
          <Button variant="primary" onClick={signUp}>
            Next
          </Button>
          <Form.Group controlId="formFileSm" className="mb-3 bottomGroup">
            <p>
              Already user?
              <span onClick={() => loginTab()}> Sign in</span>
            </p>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

CustomerSignup.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSignup);

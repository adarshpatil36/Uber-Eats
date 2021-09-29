import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

export const CustomerSignup = ({ loginTab }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    console.log(e);
    switch (e.target.id) {
      case "fname":
        setFname(e.target.value);
        break;
      case "lname":
        setLname(e.target.value);
        break;
      case "uname":
        setUname(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const signUp = () => {
    const data = { fname, lname, uname, email, password };
    console.log("Post Data", data);
    axios.post("http://localhost:8080/adduser", data).then((res) => {
      if (res.data === "Okay") {
        console.log("Data posted Successful ");
        // this.setState({ isError: false, redirectVar: <Redirect to="/home" /> });
      } else {
        console.log("Data post failed ");
        // this.setState({
        //   isError: true,
        //   redirectVar: <Redirect to="/create" />,
        // });
      }
    });
  };

  return (
    <div className="login">
      <img
        src="https://d1a3f4spazzrp4.cloudfront.net/arch-frontend/1.1.1/d1a3f4spazzrp4.cloudfront.net/eats/eats-logo-1a01872c77.svg"
        alt=""
      ></img>
      <div className="loginTab">
        <h5>Let's get started </h5>
        <input
          id="fname"
          placeholder="First Name"
          value={fname}
          onChange={handleChange}
        ></input>
        <input
          id="lname"
          placeholder="Last Name"
          value={lname}
          onChange={handleChange}
        ></input>
        <input
          id="uname"
          placeholder="User Name"
          value={uname}
          onChange={handleChange}
        ></input>
        <input
          id="email"
          placeholder="Email ID"
          value={email}
          onChange={handleChange}
        ></input>
        <input
          id="password"
          placeholder="Password"
          value={password}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSignup);

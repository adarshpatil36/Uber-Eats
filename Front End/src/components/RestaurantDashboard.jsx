import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import { useHistory } from "react-router";

const RestaurantDashboard = ({ restData }) => {
  const [data, setData] = useState({ restData });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  let history = useHistory();
  const redirectToDashboard = () => {
    history.push("/restaurantDashboard");
  };

  useEffect(() => {
    setData(restData);
  }, [restData]);

  return (
    <div>
      <NavBar navigateTo={redirectToDashboard} />
      <Form>
        <Form.Group className="mb-8">
          <Form.Label>Restaurant Name</Form.Label>
          <Form.Control
            id="name"
            placeholder="Restaurant Name"
            value={data["name"]}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Restaurant Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="description"
            placeholder="Description"
            required
            value={data["description"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-8">
          <Form.Label>Timings</Form.Label>
          <Form.Control
            id="timings"
            placeholder="Timings"
            value={data["timings"]}
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
        {/* <Button variant="primary" onClick={signUp}>
          Next
        </Button> */}
        <Form.Group controlId="formFileSm" className="mb-3 bottomGroup">
          <p>
            Already registered on Uber?
            {/* <span onClick={() => loginTab()}> Sign in</span> */}
          </p>
        </Form.Group>
      </Form>
    </div>
  );
};

RestaurantDashboard.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({
  restData: state.data.userData,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDashboard);

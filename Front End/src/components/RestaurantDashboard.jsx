import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import { useHistory } from "react-router";
import { ENV } from "../config";
import axios from "axios";
import InfoModal from "./InfoModal";

const RestaurantDashboard = ({ restData }) => {
  const [data, setData] = useState({ ...restData });
  const [dishes, setDishes] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  let history = useHistory();
  const redirectToDashboard = () => {
    history.push("/restaurantDashboard");
  };

  useEffect(() => {
    getDishes();
  }, []);
  // useEffect(() => {
  //   setData(restData);
  // }, [restData]);

  const getDishes = () => {
    const restaurant = restData.name;
    fetch(`${ENV.LOCAL_HOST}/dishes/${restaurant}`)
      .then((res) => res.json())
      .then((data) => {
        setDishes(data);
        console.log(">>", data);
      });
  };
  const handleDishChange = (e, dId) => {
    const { id, value } = e.target;
    const dish = dishes.find((item) => item.id == dId);
    dish[id] = value;
    setDishes([...dishes]);
  };

  const updateDishes = (e, dId) => {
    const dish = dishes.find((item) => item.id === dId);
    axios.post("http://localhost:8080/dishes/updateDish", dish).then((res) => {
      if (res.status === 200) {
        setShow(true);
        // alert("Dish updated succesfully");
        console.log("Successfully posted data");
      }
    });

    console.log(dishes);
  };
  return (
    <div className="RestaurantDashboard">
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
        <Button variant="primary">Update Data</Button>
      </Form>
      <br />
      <div className="dishesDashboard">
        <span>Dishes</span>
      </div>
      {dishes?.length > 0 &&
        dishes.map((item) => (
          <Form>
            <Form.Group className="mb-8">
              <Form.Label>Dish Name</Form.Label>
              <Form.Control
                id="name"
                placeholder="Restaurant Name"
                value={item.name}
                onChange={(e) => handleDishChange(e, item.id)}
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Dish Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="description"
                placeholder="Description"
                required
                value={item.description}
                onChange={(e) => handleDishChange(e, item.id)}
              />
            </Form.Group>

            <Form.Group className="mb-8">
              <Form.Label>Ratings</Form.Label>
              <Form.Control
                id="rating"
                placeholder="Ratings"
                value={item.rating}
                onChange={(e) => handleDishChange(e, item.id)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-8">
              <Form.Label>Price</Form.Label>
              <Form.Control
                id="price"
                placeholder="Price"
                value={item.price}
                onChange={(e) => handleDishChange(e, item.id)}
                required
              />
            </Form.Group>
            <Button variant="primary" onClick={(e) => updateDishes(e, item.id)}>
              Update Dish
            </Button>
          </Form>
        ))}
      <InfoModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      ></InfoModal>
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

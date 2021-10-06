import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { dishes } from "../constants/app";

export const Restaurant = (props) => {
  const backgroundImgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.6)), url('https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC85Y2VmYjIzYy00ODk5LTQ5ZGYtYjE0ZC1lOWMwZjdhMjRmMmIuanBlZw==')`,
  };
  return (
    <div className="Restaurant">
      <NavBar />
      <div className="backgroundImg" style={backgroundImgStyle}>
        <div>Restaurant name</div>
      </div>
      <p>description</p>
      <p>contact</p>
      <p>timings</p>
      <h3>Dishes</h3>
      <div className="dishCard">
        {dishes.map((item) => {
          return (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <img class="card-img-top" src={item.image} alt="Dishes" />
                <p class="card-text">{item.desc}</p>
                <h6 class="card-subtitle mb-2 text-muted">
                  ${item.price.toFixed(2)}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Restaurant.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);

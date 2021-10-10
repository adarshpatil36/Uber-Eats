import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { ACTION_TYPE } from "../actions/ActionTypes";
import { ENV } from "../config";

const DisplayResultCard = ({ setSelectedRestaurant }) => {
  let history = useHistory();

  const [restaurants, setrestaurants] = useState([]);

  useEffect(() => {
    fetch(`${ENV.LOCAL_HOST}/restaurant`)
      .then((res) => res.json())
      .then((data) => {
        setrestaurants(data);
      });
  }, []);

  const openRestaurantCard = (res) => {
    setSelectedRestaurant(res);
    history.push("/restaurant");
  };

  return (
    <div className="displayResultCard">
      <h3> Popular near you</h3>
      <div class="container">
        <div class="flex">
          {restaurants.map((item) => (
            <div
              class="card"
              id={item.id}
              onClick={() => openRestaurantCard(item)}
            >
              <img src={item.url} alt="" />
              <div class="card-body">
                <h3>{item.title}</h3>
                <p>{item.deliveryFee}</p>
                <p>Delivery Time: {item.deliveryTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

DisplayResultCard.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedRestaurant: (res) =>
      dispatch({ type: ACTION_TYPE.SET_SELECTED_RESTAURANT, value: res }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayResultCard);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { URLS } from "../constants/api";

export const DisplayResultCard = (props) => {
  let history = useHistory();

  const openRestaurantCard = () => {
    history.push("/restaurant");
  };

  return (
    <div className="displayResultCard">
      <p> Popular near you</p>
      <div className="restaurants">
        {URLS.FOOD_ITEMS.map((item) => {
          return (
            <img src={item} alt="" onClick={() => openRestaurantCard()}></img>
          );
        })}
      </div>
    </div>
  );
};

DisplayResultCard.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayResultCard);

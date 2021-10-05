import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { URLS } from "../constants/api";

export const DisplayResultCard = (props) => {
  return (
    <div className="displayResultCard">
      <p> Popular near you</p>
      <div className="restaurants">
        {URLS.FOOD_ITEMS.map((item) => {
          return <img src={item} alt="" onClick={() => alert("Hello")}></img>;
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

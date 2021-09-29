import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { URLS } from "../constants/api";

export const DisplayResultCard = (props) => {
  return (
    <div className="displayResult">
      <p> Popular near you</p>
      {URLS.FOOD_ITEMS.map((item) => {
        return <img src={item} alt="" onClick={() => alert("Hello")}></img>;
      })}
    </div>
  );
};

DisplayResultCard.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayResultCard);

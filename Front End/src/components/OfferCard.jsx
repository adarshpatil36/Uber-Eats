import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { URLS } from "../constants/api";

export const OfferCard = (props) => {
  return (
    <div className="offerCard">
      {URLS.OFER_CARDS.map((item) => {
        return (
          <img
            src={item}
            alt=""
            onClick={() => alert("Functionality in progress")}
          ></img>
        );
      })}
    </div>
  );
};

OfferCard.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);

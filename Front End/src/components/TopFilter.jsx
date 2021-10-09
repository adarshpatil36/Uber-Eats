import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { URLS } from "../constants/api";

export const TopFilter = () => {
  return (
    <div className="topFilter">
      {URLS.TOP_FILTER.map((item, index) => {
        return (
          <img
            src={item}
            alt=""
            key={index}
            onClick={() => alert("Functionality in progress")}
          ></img>
        );
      })}
    </div>
  );
};

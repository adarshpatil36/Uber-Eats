import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { URLS } from "../constants/api";

export const TopFilter = (props) => {
  return (
    <div className="topFilter">
      {URLS.TOP_FILTER.map((item) => {
        return <img src={item} alt="" onClick={() => alert("Hello")}></img>;
      })}
    </div>
  );
};

TopFilter.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopFilter);

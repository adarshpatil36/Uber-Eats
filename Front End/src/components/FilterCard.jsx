import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const FilterCard = (props) => {
  return <div></div>;
};

FilterCard.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCard);

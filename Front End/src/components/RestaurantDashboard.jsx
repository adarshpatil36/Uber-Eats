import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavBar from "./NavBar";

export const RestaurantDashboard = (props) => {
  return (
    <div>
      Hello
      <NavBar />
    </div>
  );
};

RestaurantDashboard.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDashboard);

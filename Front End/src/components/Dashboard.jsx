import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TopFilter } from "./TopFilter";
import NavBar from "./NavBar";
import DisplayResultCard from "./DisplayResultCard";
import { FilterCard } from "./FilterCard";
import OfferCard from "./OfferCard";
import SectionCard from "./SectionCard";

export const Dashboard = ({ userData, changeActiveTab }) => {
  return (
    <div>
      <NavBar />
      <TopFilter />
      <hr />
      <OfferCard />
      <SectionCard></SectionCard>
    </div>
  );
};

Dashboard.propTypes = {
  userData: PropTypes.object,
};

const mapStateToProps = (state) => ({
  userData: state.data.userData,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

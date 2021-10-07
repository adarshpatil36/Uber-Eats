import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TopFilter } from "./TopFilter";
import NavBar from "./NavBar";
import DisplayResultCard from "./DisplayResultCard";
import { FilterCard } from "./FilterCard";
import OfferCard from "./OfferCard";
import SectionCard from "./SectionCard";
import { useLocation } from "react-router";
import ToastCard from "./ToastCard";

export const Dashboard = ({ userData, changeActiveTab }) => {
  const location = useLocation();

  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    console.log(location.state);
    if (location.state === "orderPlaced") {
      window.scrollTo(0, 0);
      setShowToast(true);
    }
  }, []);

  return (
    <div>
      <NavBar />
      {showToast && <ToastCard />}
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

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DisplayResultCard } from "./DisplayResultCard";
import { AdvanceFilterCard } from "./AdvanceFilterCard";

export const SectionCard = (props) => {
  return (
    <div className="sectionCard">
      <AdvanceFilterCard></AdvanceFilterCard>
      <DisplayResultCard></DisplayResultCard>
    </div>
  );
};

SectionCard.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionCard);

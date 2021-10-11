import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Accordion from "react-bootstrap/Accordion";

export const AdvanceFilterCard = (props) => {
  return (
    <div className="advanceFilterCard">
      <p>All Stores</p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Dietary</Accordion.Header>
          <Accordion.Body>
            <div>
              <input type="radio" id="age1" value="30" />
              <span>Vegeterian</span>
            </div>
            <div>
              <input type="radio" id="age1" value="30" />
              <span>Non Vegeterian </span>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Price Range</Accordion.Header>
          <Accordion.Body className="priceRange">
            <button>$</button>
            <button>$$</button>
            <button>$$$</button>
            <button>$$$$</button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Max Delivery Fee</Accordion.Header>
          <Accordion.Body>
            <input
              type="range"
              className="form-range"
              min="0"
              max="5"
              step="1"
              id="customRange3"
            />
            <div className="range">
              <p>$1</p>
              <p>$3</p>
              <p>$5</p>
              <p>$5+</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Sort</Accordion.Header>
          <Accordion.Body>
            <button>Picked for you</button>
            <button>Most Popular</button>
            <button>Rating</button>
            <button>Delivery Time</button>
            <button>Allergy Friendly</button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

AdvanceFilterCard.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdvanceFilterCard);

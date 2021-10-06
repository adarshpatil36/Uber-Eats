import React from "react";
import { connect } from "react-redux";
import { ACTION_TYPE } from "../actions/ActionTypes";

const IncDecCounter = ({ item, increaseQuantity, decreaseQuantity }) => {
  const increamentCount = (item) => {
    increaseQuantity(item);
  };
  const decreamentCount = () => {
    decreaseQuantity(item);
  };
  return (
    <span>
      <button class="quantity__minus" onClick={decreamentCount}>
        -
      </button>
      <label name="quantity" type="text" class="quantity__input">
        {item.quantity || 0}
      </label>
      <button class="quantity__plus" onClick={increamentCount}>
        +
      </button>
    </span>
  );
};

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseQuantity: (val) => {
      dispatch({ type: ACTION_TYPE.INCREASE_QUANTITY, value: val });
    },
    decreaseQuantity: (val) => {
      dispatch({ type: ACTION_TYPE.DECREASE_QUANTITY, value: val });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncDecCounter);

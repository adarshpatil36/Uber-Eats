import React from "react";

const IncDecCounter = ({ item, increaseQuantity, decreaseQuantity }) => {
  const increamentCount = () => {
    increaseQuantity(item);
  };
  const decreamentCount = () => {
    if (item.quantity !== 0) {
      decreaseQuantity(item);
    }
  };
  return (
    <span>
      <button className="quantity__minus" onClick={decreamentCount}>
        -
      </button>
      <label
        name="quantity"
        type="text"
        className="quantity__input"
        data-testid="incDecCounter"
      >
        {item.quantity || 0}
      </label>
      <button className="quantity__plus" onClick={increamentCount}>
        +
      </button>
    </span>
  );
};

export default IncDecCounter;

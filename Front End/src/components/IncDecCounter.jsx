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

export default IncDecCounter;

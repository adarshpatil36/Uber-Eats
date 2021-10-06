import React from "react";

export default function IncDecCounter() {
  return (
    <span>
      <button class="quantity__minus">-</button>
      <label name="quantity" type="text" class="quantity__input">
        1
      </label>
      <button class="quantity__plus">+</button>
    </span>
  );
}

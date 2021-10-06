import React from "react";

export default function IncDecCounter() {
  return (
    <div class="quantity">
      <span class="quantity__minus">-</span>
      <label name="quantity" type="text" class="quantity__input">
        1
      </label>
      <span class="quantity__plus">+</span>
    </div>
  );
}

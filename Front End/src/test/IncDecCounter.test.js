import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import ReactDOM from "react-dom";

import renderer from "react-test-renderer";
import IncDecCounter from "../components/IncDecCounter";

describe("IncDecCounter testing", () => {
  const item = {
    quantity: 20,
  };
  const increaseQuantity = () => {};
  const decreaseQuantity = () => {};

  it("renders IncDecCounter without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <IncDecCounter
        item={item}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      ></IncDecCounter>,
      div
    );
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <IncDecCounter
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        ></IncDecCounter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

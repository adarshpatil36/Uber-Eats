import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import ReactDOM from "react-dom";
import FooterCard from "../components/FooterCard";

import renderer from "react-test-renderer";
it("renders FooterCard without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FooterCard></FooterCard>, div);
});

it("renders FooterCard with proper label", () => {
  const { queryByLabelText } = render(<FooterCard></FooterCard>);
  expect(queryByLabelText).toBeTruthy();
});

it("renders correctly", () => {
  const tree = renderer.create(<FooterCard></FooterCard>).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import ReactDOM from "react-dom";

import renderer from "react-test-renderer";
import FooterCard from "../components/FooterCard";
import IncDecCounter from "../components/IncDecCounter";
import { TopFilter } from "../components/TopFilter";

describe("TopFilter testing", () => {
  it("renders TopFilter without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TopFilter></TopFilter>, div);
  });

  it("snapshot test of TopFilter", () => {
    const tree = renderer.create(<TopFilter></TopFilter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

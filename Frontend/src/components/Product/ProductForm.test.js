import React from "react";
import Button from "@material-ui/core/Button";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ProductForm from "./ProductForm";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
});

it("should have a `button` element", () => {
  expect(
    wrapper.containsMatchingElement(
      <Button type="submit" fullWidth variant="contained" color="primary">
        SELL ITEM
      </Button>
    )
  ).toBe(true);
});

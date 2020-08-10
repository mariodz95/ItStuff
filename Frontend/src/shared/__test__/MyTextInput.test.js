import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { MyTextInput } from "../MyTextInput";
import { Formik } from "formik";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(
    <Formik>
      <MyTextInput
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        autoFocus
      />
    </Formik>
  );
  expect(wrapper).toBeTruthy();
});

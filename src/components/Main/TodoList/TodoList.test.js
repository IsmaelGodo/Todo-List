import React from "react";
import { shallow } from "enzyme";
import TodoList from "./TodoList";

describe("Todo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Todo />);
    expect(wrapper).toMatchSnapshot();
  });
});

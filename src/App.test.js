import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from './App';

configure({ adapter: new Adapter() });

describe('renders learn react link', () => {
  it("should match Snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

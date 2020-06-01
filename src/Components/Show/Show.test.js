import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Show from "./index";

configure({ adapter: new Adapter() });

let wrapper;
const show = {
  id: 1,
  name: "Under the Dome",
  genres: ["Drama", "Science-Fiction", "Thriller"],
  schedule: { time: "22:00", days: ["Thursday"] },
  rating: { average: 6.5 },
  image: {
    medium:
      "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
  },
};

beforeEach(() => {
  wrapper = shallow(
    <Show show={show} image={show.image.medium} name={show.name} />
  );
});

describe("<Show />", () => {
  it("should match Snapshot with props", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

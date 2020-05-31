import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Genre from "./";

configure({ adapter: new Adapter() });

let wrapper;
const shows = [
  {
    id: 1,
    name: "Under the Dome",
    genres: ["Drama", "Science-Fiction", "Thriller"],
    schedule: { time: "22:00", days: ["Thursday"] },
    rating: { average: 6.5 },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    },
  },
  {
    id: 2,
    name: "Under the Dome",
    genres: ["Drama", "Science-Fiction", "Thriller"],
    schedule: { time: "22:00", days: ["Thursday"] },
    rating: { average: 6.5 },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    },
  },
  {
    id: 3,
    name: "Under the Dome",
    genres: ["Drama", "Science-Fiction", "Thriller"],
    schedule: { time: "22:00", days: ["Thursday"] },
    rating: { average: 6.5 },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    },
  },
  {
    id: 4,
    name: "Under the Dome",
    genres: ["Drama", "Science-Fiction", "Thriller"],
    schedule: { time: "22:00", days: ["Thursday"] },
    rating: { average: 6.5 },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    },
  },
  {
    id: 5,
    name: "Under the Dome",
    genres: ["Drama", "Science-Fiction", "Thriller"],
    schedule: { time: "22:00", days: ["Thursday"] },
    rating: { average: 6.5 },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    },
  },
  {
    id: 6,
    name: "Under the Dome",
    genres: ["Drama", "Science-Fiction", "Thriller"],
    schedule: { time: "22:00", days: ["Thursday"] },
    rating: { average: 6.5 },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    },
  },
];

beforeEach(() => {
  wrapper = shallow(<Genre />);
});

describe("<Genre />", () => {
  it("should match Snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should match Snapshot with props", () => {
    wrapper = shallow(<Genre shows={shows} type="Drama" />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should match Snapshot with more than 6 shows", () => {
    shows.push({
      id: 7,
      name: "Under the Dome",
      genres: ["Drama", "Science-Fiction", "Thriller"],
      schedule: { time: "22:00", days: ["Thursday"] },
      rating: { average: 6.5 },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
      },
    });
    wrapper = shallow(<Genre shows={shows} type="Drama" />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

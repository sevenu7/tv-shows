import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
import GenreShows from "./index";

jest.mock("axios");

configure({ adapter: new Adapter() });

let wrapper;
const location = {
  shows: [
    {
      id: 1,
      url: "http://www.tvmaze.com/shows/1/under-the-dome",
      name: "Under the Dome",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Science-Fiction", "Thriller"],
      status: "Ended",
      runtime: 60,
      premiered: "2013-06-24",
      officialSite: "http://www.cbs.com/shows/under-the-dome/",
      schedule: { time: "22:00", days: ["Thursday"] },
      rating: { average: 6.5 },
      weight: 97,
      network: {
        id: 2,
        name: "CBS",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
      },
      webChannel: null,
      externals: { tvrage: 25988, thetvdb: 264492, imdb: "tt1553656" },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
      },
      summary:
        "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    },
    {
      id: 2,
      url: "http://www.tvmaze.com/shows/1/under-the-dome",
      name: "Under the Dome",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Science-Fiction", "Thriller"],
      status: "Ended",
      runtime: 60,
      premiered: "2013-06-24",
      officialSite: "http://www.cbs.com/shows/under-the-dome/",
      schedule: { time: "22:00", days: ["Thursday"] },
      rating: { average: 6.5 },
      weight: 97,
      network: {
        id: 2,
        name: "CBS",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
      },
      webChannel: null,
      externals: { tvrage: 25988, thetvdb: 264492, imdb: "tt1553656" },
      image: null,
      summary:
        "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    },
  ],
};

const match = { params: { id: 'Drama' } };
const data = { data: location.shows };
axios.get.mockResolvedValue(data);

beforeEach(() => {
  wrapper = shallow(<GenreShows location={{}} match={match} />);
});

describe("<GenreShows />", () => {
  it("should match Snapshot without location prop and success response", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should match Snapshot without location prop and error response", () => {
    axios.get.mockRejectedValue(data);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should match Snapshot", () => {
    wrapper = shallow(<GenreShows location={location} match={match} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should set back in state to true when back button is pressed", () => {
    wrapper = shallow(<GenreShows location={location} match={match} />);
    wrapper.find('Button').simulate('click');
    expect(wrapper.state('back')).toBe(true);
  });
});

import React, { Component } from "react";

import Genre from "../../Components/Genre/Index";
import { Container } from "react-bootstrap";
import { fetchAllShows, searchShows } from "../../services";
import { title, noShows, errMsg, siteDescription } from "../../constants";

class Dashboard extends Component {
  state = {
    shows: null,
    searchValue: "",
    error: false,
  };

  componentDidMount() {
    this.getAllShows();
  }

  getGenres = () => {
    const { shows } = this.state;
    let genres = new Set();
    if (shows) {
      for (let i = 0; i < shows.length; i += 1) {
        genres.add(...shows[i].genres);
      }
    }
    return [...genres];
  };

  searchApi = (value) => {
    if (value !== "") {
      searchShows(value)
        .then((res) => {
          const resultArray = res.data.map((showData) => showData.show);
          this.setState({ shows: resultArray, error: false });
        })
        .catch(() => this.setState({ error: true }));
    } else {
      this.getAllShows();
    }
  };

  getAllShows = () => {
    fetchAllShows()
      .then((res) => this.setState({ shows: res.data, error: false }))
      .catch(() => this.setState({ error: true }));
  };

  inputSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    this.setState((state) => ({ ...state, searchValue }));
    this.searchApi(searchValue);
  };

  submitHandler = (e) => {
    e.preventDefault();
    const searchValue = this.state.searchValue;
    this.searchApi(searchValue);
  };

  render() {
    const { shows, searchValue, error } = this.state;
    // console.log(this.state.shows);
    const genres = this.getGenres();
    return (
      <Container>
        <div className="header">
          <h1>{title}</h1>
          <p className="desc">{siteDescription}</p>
        </div>
        <form onSubmit={this.submitHandler} className="middle">
          <input
            type="text"
            name="search"
            placeholder="Search.."
            value={searchValue}
            onChange={this.inputSearch}
            className="searchField"
          />
        </form>
        {genres.length > 0 ? (
          genres.map((genre) => (
            <Genre type={genre} shows={shows} key={`Genre-${genre}`} />
          ))
        ) : (
          <h2>{error ? errMsg : noShows}</h2>
        )}
      </Container>
    );
  }
}

export default Dashboard;

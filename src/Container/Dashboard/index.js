import React, { Component } from "react";

import Genre from "../../Components/Genre/Index";
import { Container } from "react-bootstrap";
import { fetchAllShows, searchShows } from "../../services";
import { TITLE, NO_SHOWS, ERR_MSG, SITE_DESCRIPTION, LOADING } from "../../constants";

class Dashboard extends Component {
  state = {
    loading: false,
    shows: null,
    searchValue: "",
    error: false,
  };

  componentDidMount() {
    this.getAllShows();
  }

  // getGenres will get all the unique genres available
  getGenres = () => {
    const { shows } = this.state;
    let genres = new Set();
    if (shows) {
      shows.forEach((show) => {
        genres.add(...show.genres);
      });
    }
    return [...genres];
  };

  // searchApi method searches for the shows with search value given and sets them in the state
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

  // getAllShows method fetches all the available shows in the API
  getAllShows = () => {
    this.setState({loading: true});
    fetchAllShows()
      .then((res) => this.setState({ shows: res.data, error: false }))
      .catch(() => this.setState({ error: true }))
      .finally(this.setState({loading:false}));
  };

  // inputSearch method sets searchValue in state and calls searchApi method with input value of the user
  inputSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    this.setState((state) => ({ ...state, searchValue }));
    this.searchApi(searchValue);
  };

  // submitHandler method calls searchApi with searchValue 
  submitHandler = (e) => {
    e.preventDefault();
    const searchValue = this.state.searchValue;
    this.searchApi(searchValue);
  };

  render() {
    const { shows, searchValue, error, loading } = this.state;
    const genres = this.getGenres();
    return (
      <Container>
        <div className="header">
          <h1>{TITLE}</h1>
          <p className="desc">{SITE_DESCRIPTION}</p>
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
          <h2>{loading ? LOADING : error ? ERR_MSG : NO_SHOWS}</h2>
        )}
      </Container>
    );
  }
}

export default Dashboard;

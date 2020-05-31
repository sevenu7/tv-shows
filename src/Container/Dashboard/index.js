import React, { Component } from "react";
import axios from "axios";

import Genre from "../../Components/Genre/Index";
import { Container } from "react-bootstrap";

class Dashboard extends Component {
  state = {
    shows: null,
    searchValue: "",
  };

  componentDidMount() {
    axios
      .get("http://api.tvmaze.com/shows")
      .then((res) => this.setState({ shows: res.data }))
      .catch((err) => console.log(err));
  }

  getGenres = () => {
    const { shows } = this.state;
    console.log(shows)
    let genres = new Set();
    if (shows) {
      for (let i = 0; i < shows.length; i += 1) {
        genres.add(...shows[i].genres);
      }
    }
    return [...genres];
  };

  searchApi = () => {
    
  }

  inputSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    this.setState((state) => ({ ...state, searchValue}));
    axios
      .get(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((res) => {
        const resultArray = res.data.map((showData) => showData.show);
        this.setState({ shows: resultArray })
        console.log(resultArray);
      })
      .catch((err) => console.log(err));
  };

  submitHandler = (e) => {
    e.preventDefault();
    const searchValue = this.state.searchValue;
    axios
      .get(`http://api.tvmaze.com/search/shows?q=${searchValue}`)
      .then((res) => {
        const resultArray = res.data.map((showData) => showData.show);
        this.setState({ shows: resultArray })
        console.log(resultArray);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { shows, searchValue } = this.state;
    // console.log(this.state.shows);
    const genres = this.getGenres();
    return (
      <Container>
        <h1>Popular TV Shows</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="search"
            placeholder="Search.."
            value={searchValue}
            onChange={this.inputSearch}
          />
        </form>
        {genres.length>0 ? genres.map((genre) => (
          <Genre type={genre} shows={shows} />
        )): <h2>No Shows Found</h2>}
      </Container>
    );
  }
}

export default Dashboard;

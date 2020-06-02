import React, { Component } from "react";
import Show from "../../Components/Show";
import { Row, Button, Container, Spinner } from "react-bootstrap";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { fetchAllShows } from "../../services";
import dummyImage from "../../assets/no-img-portrait-text.png";

class GenreShows extends Component {
  state = {
    back: false,
    shows: this.props.location.shows,
  };

  componentDidMount() {
    const { shows } = this.state;
    const type = this.props.match.params.id;
    if (!shows) {
      fetchAllShows()
        .then((res) => {
          const filteredShows = res.data.filter((show) =>
            show.genres.includes(type)
          );
          filteredShows.sort((a, b) => b.rating.average - a.rating.average);
          this.setState({ shows: filteredShows });
        })
        .catch(() => this.setState({ error: true }));
    }
  }

  // onBack method returns the user to previous page
  onBack = () => {
    this.setState({ back: true });
  };

  render() {
    const { shows, back } = this.state;
    const { match } = this.props;
    return shows ? (
      <Container>
        <h1>{match.params.id}</h1>
        <Row>
          {shows.map((show) => (
            <Show
              image={show.image ? show.image.medium : dummyImage}
              name={show.name}
              show={show}
              key={`Show-${show.id}`}
            />
          ))}
        </Row>
        <Button variant="dark" onClick={this.onBack}>
          Back
        </Button>
        {back ? <Redirect to="/" /> : null}
      </Container>
    ) : (
      <Spinner className="spinner" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
}

export default GenreShows;

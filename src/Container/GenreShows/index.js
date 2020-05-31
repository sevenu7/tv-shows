import React, { Component } from 'react';
import Show from '../../Components/Show';
import { Row, Button, Container, Spinner } from 'react-bootstrap';
import { Redirect, withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

class GenreShows extends Component {
    state = {
        back: false,
        shows: this.props.location.shows
    }

    componentDidMount() {
        const { shows } = this.state;
        // console.log(this.props.location)
        const type = this.props.match.params.id;
        if (!shows) {
            axios.get(`http://api.tvmaze.com/shows`)
                .then(res => {
                    const filteredShows = res.data.filter(show => show.genres.includes(type))
                    filteredShows.sort((a, b) => b.rating.average - a.rating.average)
                    this.setState({ shows: filteredShows })
                })
                .catch(err => console.log(err))
        }
    }

    onBack = () => {
        this.setState({ back: true })
    }

    render() {
        const { shows, back } = this.state;
        const { match } = this.props;
        return (
            shows ? <Container >
                <h1>
                    {match.params.id}
                </h1>
                <Row>
                    {shows.map(show => (
                        <Show image={show.image.medium} name={show.name} show={show} />
                    ))}
                </Row>
                <Button variant='dark' onClick={this.onBack}>Back</Button>
                {back ? <Redirect to='/' /> : null}
            </Container> :
                <Spinner className="spinner" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
        );
    }
}

export default withRouter(GenreShows);
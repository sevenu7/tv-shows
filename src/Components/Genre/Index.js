import React from 'react';
import Show from '../Show';
import { Row, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dummyImage from '../../assets/no-img-portrait-text.png';

function Genre({ type, shows }) {
    let filteredShows;
    let showList;
    if (shows) {
        filteredShows = shows.filter(show => show.genres.includes(type))
        // console.log(filteredShows)
    }
    if (filteredShows) {
        filteredShows.sort((a, b) => b.rating.average - a.rating.average)   // sorting the shows according to rating(descending)
        showList = filteredShows.map(show => (
            <Show image={show.image ? show.image.medium : dummyImage} name={show.name} show={show} />
        )).slice(0, 6)                                                      // showing maximum 6 shows per genre in dashboard
    }
    const genrePath = {
        pathname: `/genre/${type}`,
        shows: filteredShows,
        type
    }
    return (
        type ? <>
            < h2 >
                {type}
                {filteredShows.length > 6 ? < Link to={genrePath} >          {/* removing see more if shows less than or equal to 6 */}
                    <Badge pill variant="dark" style={{ float: 'right' }}>See More</Badge>
                </Link > : null}
            </h2 >
            <Row>
                {showList}
            </Row>
        </> : null
    );
}

export default Genre;
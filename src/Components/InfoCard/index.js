import React from 'react';

function InfoCard({ show }) {
    const { time, days } = show.schedule;
    return (
        <div className="infoCard">
            <div>
                <strong>Rating: </strong>
                <span>{show.rating.average}</span>
            </div>
            <div>
                <strong>Country: </strong>
                <span>{show.network.country.name}</span>
            </div>
            <div>
                <strong>Show type: </strong>
                <span>{show.type}</span>
            </div>
            <div>
                <strong>Genres: </strong>
                <span>{show.genres.join(', ')}</span>
            </div>
            <div>
                <strong>Schedule: </strong>
                <span>{days.join(', ')} at {time} ({show.runtime} mins)</span>
            </div>
            <div>
                <strong>Official Site: </strong>
                <span><a href={show.officialSite} target="blank">{show.officialSite}</a></span>
            </div>
        </div>
    );
}

export default InfoCard;

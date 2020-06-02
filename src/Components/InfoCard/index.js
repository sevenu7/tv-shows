import React from "react";
import {
  RATING,
  COUNTRY,
  SHOW_TYPE,
  GENRES,
  SCHEDULE,
  OFFICIAL_SITE,
  NA,
} from "../../constants";

function InfoCard({ show }) {
  const { time, days } = show.schedule || { time: NA, days: [NA] };
  return (
    <div className="infoCard">
      <div>
        <strong>{RATING}</strong>
        <span>{show.rating.average || NA}</span>
      </div>
      <div>
        <strong>{COUNTRY}</strong>
        <span>{show.network ? show.network.country.name : NA}</span>
      </div>
      <div>
        <strong>{SHOW_TYPE}</strong>
        <span>{show.type || NA}</span>
      </div>
      <div>
        <strong>{GENRES}</strong>
        <span>{show.genres ? show.genres.join(", ") : NA}</span>
      </div>
      <div>
        <strong>{SCHEDULE}</strong>
        <span>
          {days.join(", ")} at {time || NA} ({show.runtime || NA} mins)
        </span>
      </div>
      <div>
        <strong>{OFFICIAL_SITE}</strong>
        <span>
          <a href={show.officialSite} target="blank">
            {show.officialSite || NA}
          </a>
        </span>
      </div>
    </div>
  );
}

export default InfoCard;

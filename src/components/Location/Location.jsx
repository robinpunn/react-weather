import React from "react";
import "./Location.css";

function TimeAndLocation({ weather: { name } }) {
  return (
    <div>
      <div className="location-container">
        <p className="location">{`${name}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;

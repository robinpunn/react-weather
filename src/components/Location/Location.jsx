import React from "react";
import "./Location.css";

function TimeAndLocation({ weather: { name } }) {
  return (
    <div className="location-container">
      <p className="location">{`${name}`}</p>
    </div>
  );
}

export default TimeAndLocation;

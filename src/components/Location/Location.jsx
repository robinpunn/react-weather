import React from "react";

function TimeAndLocation({ weather: { name } }) {
  return (
    <div className="location-container">
      <p className="location">{`${name}`}</p>
    </div>
  );
}

export default TimeAndLocation;

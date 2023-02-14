import React from "react";
import "./TimeAndLocation.css";

function TimeAndLocation() {
  return (
    <div>
      <div className="time-container">
        <p className="time">Monday, 13 February 2023 | Local Time: 12:00</p>
      </div>
      <div className="location-container">
        <p className="location">Chicago, IL</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;

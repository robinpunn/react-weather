import React from "react";
import { formatLocalTime } from "../../services/weatherService";
import "./TimeAndLocation.css";

function TimeAndLocation({ weather: { dt, name, country } }) {
  // console.log("time and location: ", timezone);
  return (
    <div>
      <div className="time-container">
        <p className="time">{formatLocalTime(dt)}</p>
      </div>
      <div className="location-container">
        <p className="location">{`${name},${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;

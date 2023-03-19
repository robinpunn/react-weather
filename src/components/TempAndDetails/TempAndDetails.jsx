import React from "react";

import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
} from "@iconscout/react-unicons";

function TempAndDetails({
  weather: { feels_like, temp_min, temp_max, humidity, name, speed, details },
}) {
  return (
    <div className="details-container">
      <div className="range-container">
        <p className="range-text">
          High:{""}
          <span className="range-value">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="range-text">
          Low:{""}
          <span className="range-value">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
      <div className="weather-stats">
        <div className="weather-stat-icons">
          <UilTemperature size={18} className="weather-stat-icon" />
          Real feel:
          <span className="weather-span">{`${feels_like.toFixed()}°`}</span>
        </div>
        <div className="weather-stat-icons">
          <UilTear size={18} className="weather-stat-icon" />
          Humidity:
          <span className="weather-span">{`${humidity}%`}</span>
        </div>
        <div className="weather-stat-icons">
          <UilWind size={18} className="weather-stat-icon" />
          Wind:
          <span className="weather-span">{`${speed} mph`}</span>
        </div>
      </div>
      <p className="details-text">{details}</p>
      {/*<UilArrowUp className="range-icon" />*/}
      {/*<UilArrowDown className="range-icon" />*/}
    </div>
  );
}

export default TempAndDetails;

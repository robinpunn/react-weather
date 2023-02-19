import React from "react";
import "./TempAndDetails.css";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
} from "@iconscout/react-unicons";
import { iconURLFromCode } from "../../services/weatherService";

function TempAndDetails({
  weather: {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    speed,
    details,
    icon,
  },
}) {
  return (
    <div>
      {/*weather specifics*/}
      <div className="weather-container">
        <p className="weather-number">{`${temp.toFixed()}°`}</p>
        <img
          src={iconURLFromCode(icon)}
          alt="weather-icon"
          className="weather-icon"
        />
      </div>
      {/*description*/}
      <div className="details">
        <p className="details-text">{details}</p>
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
      {/*high/low*/}
      <div className="range-container">
        {/*high*/}
        <UilArrowUp className="range-icon" />
        <p className="range-text">
          High: <span className="range-value">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="range-separator">|</p>
        {/*low*/}
        <UilArrowDown className="range-icon" />
        <p className="range-text">
          Low: <span className="range-value">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TempAndDetails;

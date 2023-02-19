import React from "react";
import "./TempAndDetails.css";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { iconURLFromCode } from "../../services/weatherService";
import { formatLocalTime } from "../../services/weatherService";

function TempAndDetails({
  weather: {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    speed,
    details,
    icon,
    timezone,
  },
}) {
  // console.log("timezone from deets:", timezone);
  return (
    <div>
      {/*description*/}
      <div className="details">
        <p className="details-text">{details}</p>
      </div>
      {/*weather specifics*/}
      <div className="weather-container">
        <img
          src={iconURLFromCode(icon)}
          alt="weather-icon"
          className="weather-icon"
        />
        <p className="weather-number">{`${temp.toFixed()}°`}</p>
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
      </div>
      {/*rise/set + high/low*/}
      <div className="range-container">
        {/*rise*/}
        <UilSun className="range-icon" />
        <p className="range-text">
          Rise:{" "}
          <span className="range-value">
            {formatLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="range-separator">|</p>
        {/*set*/}
        <UilSunset className="range-icon" />
        <p className="range-text">
          Set:{" "}
          <span className="range-value">
            {formatLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="range-separator">|</p>
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

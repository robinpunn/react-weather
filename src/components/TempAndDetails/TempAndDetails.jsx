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
    <div>
      <div className="weather-details">
        {/*<UilArrowUp className="range-icon" />*/}

        {/*<UilArrowDown className="range-icon" />*/}
        <div className="weather-stats">
          <p className="details-text">{details}</p>
          <p className="range-text">
            High:{""}
            <span className="range-value">{`${temp_max.toFixed()}°`}</span>
          </p>
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
          <p className="range-text">
            Low:{""}
            <span className="range-value">{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TempAndDetails;

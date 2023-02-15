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

function TempAndDetails() {
  return (
    <div>
      {/*description*/}
      <div className="details">
        <p className="details-text">Sunny</p>
      </div>
      {/*weather specifics*/}
      <div className="weather-container">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="weather-icon"
        />
        <p className="weather-number">34°</p>
        <div className="weather-stats">
          <div className="weather-stat-icons">
            <UilTemperature size={18} className="weather-stat-icon" />
            Real feel:
            <span className="weather-span">24°</span>
          </div>
          <div className="weather-stat-icons">
            <UilTear size={18} className="weather-stat-icon" />
            Humidity:
            <span className="weather-span">62%</span>
          </div>
          <div className="weather-stat-icons">
            <UilWind size={18} className="weather-stat-icon" />
            Wind:
            <span className="weather-span">5 mph</span>
          </div>
        </div>
      </div>
      {/*rise/set + high/low*/}
      <div className="range-container">
        {/*rise*/}
        <UilSun className="range-icon" />
        <p className="range-text">
          Rise: <span className="range-value">06:45 AM</span>
        </p>
        <p className="range-separator">|</p>
        {/*set*/}
        <UilSunset className="range-icon" />
        <p className="range-text">
          Set: <span className="range-value">07:15 PM</span>
        </p>
        <p className="range-separator">|</p>
        {/*high*/}
        <UilArrowUp className="range-icon" />
        <p className="range-text">
          High: <span className="range-value">43°</span>
        </p>
        <p className="range-separator">|</p>
        {/*low*/}
        <UilArrowDown className="range-icon" />
        <p className="range-text">
          Low: <span className="range-value">28°</span>
        </p>
      </div>
    </div>
  );
}

export default TempAndDetails;

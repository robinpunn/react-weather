import React from "react";
import { iconURLFromCode } from "../services/weatherService";

const WeatherIcon = ({ weather: { icon } }) => {
  return (
    <div className="icon">
      <img
        src={iconURLFromCode(icon)}
        alt="weather-icon"
        className="weather-icon"
      />
    </div>
  );
};

export default WeatherIcon;

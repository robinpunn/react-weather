import React from "react";
import "./Forecast.css";

function Forecast({ title }) {
  return (
    <div>
      <div className="forecast-container">
        <p className="forecast-title">{title}</p>
      </div>
      <hr className="forecast-separator" />
      <div className="forecast-card">
        <div className="forecast-contents">
          <p className="forecast-time">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="forecast-icon"
          />
          <p className="forecast-temp">24°</p>
        </div>
        <div className="forecast-contents">
          <p className="forecast-time">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="forecast-icon"
          />
          <p className="forecast-temp">24°</p>
        </div>
        <div className="forecast-contents">
          <p className="forecast-time">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="forecast-icon"
          />
          <p className="forecast-temp">24°</p>
        </div>
        <div className="forecast-contents">
          <p className="forecast-time">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="forecast-icon"
          />
          <p className="forecast-temp">24°</p>
        </div>
        <div className="forecast-contents">
          <p className="forecast-time">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="forecast-icon"
          />
          <p className="forecast-temp">24°</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;

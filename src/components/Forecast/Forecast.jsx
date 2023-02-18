import React from "react";
import { iconURLFromCode } from "../../services/weatherService";
import "./Forecast.css";

function Forecast({ title, items }) {
  console.log("forecast items:", items);
  return (
    <div>
      <div className="forecast-container">
        <p className="forecast-title">{title}</p>
      </div>
      <hr className="forecast-separator" />
      <div className="forecast-card">
        {items.map((item, index) => (
          <div className="forecast-contents" key={index}>
            <p className="forecast-time day">{item.title}</p>
            <p className="forecast-time ">{item.time}</p>
            <img
              src={iconURLFromCode(item.icon)}
              alt=""
              className="forecast-icon"
            />
            <p className="forecast-temp">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;

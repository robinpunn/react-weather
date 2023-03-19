import React from "react";

const TempNow = ({ weather: { temp } }) => {
  return <div className="weather-number">{`${temp.toFixed()}°`}</div>;
};

export default TempNow;

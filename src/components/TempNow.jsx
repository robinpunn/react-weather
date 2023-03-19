import React from "react";

const TempNow = ({ weather: { temp } }) => {
  return <p className="weather-number">{`${temp.toFixed()}°`}</p>;
};

export default TempNow;

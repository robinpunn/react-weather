import React from "react";
import "./Cities.css";

function Cities() {
  const cities = [
    {
      id: 1,
      title: "Chicago",
    },
    {
      id: 2,
      title: "Curitiba",
    },
    {
      id: 3,
      title: "Paris",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Sydney",
    },
  ];

  return (
    <div className="cities">
      {cities.map((city) => (
        <button key={city.id} className="top-button">
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default Cities;

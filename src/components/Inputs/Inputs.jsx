import React, { useState, useEffect } from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";
import "./Inputs.css";

function Inputs({ setQuery, setUnits, units }) {
  const [focus, setFocus] = useState(false);
  const [city, setCity] = useState("");

  const handleUnits = (e) => {
    const selectUnit = e.currentTarget.name;
    if (units !== selectUnit) {
      setUnits(selectUnit);
    }
  };

  const handleSearch = () => {
    if (city !== "") {
      setQuery({ q: city, units: "imperial" });
    }
    setCity("");
  };

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat: lat, lon: lon, units: "imperial" });
      });
    }
  };

  useEffect(() => {
    const input = document.querySelector(".search-bar");
    if (focus) {
      input.style.caretColor = "initial";
    } else {
      input.style.caretColor = "transparent";
    }
  }, [focus]);

  return (
    <div className="inputs">
      <div className="search">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="search for city..."
          className="search-bar"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <UilSearch
          className="search-icon mag"
          size={25}
          onClick={handleSearch}
        />
        <UilMapMarker
          className="search-icon loc"
          size={25}
          onClick={handleClick}
        />
      </div>
      <div className="temp">
        <button name="metric" className="temp-button cel" onClick={handleUnits}>
          C°
        </button>
        <p className="separator">|</p>
        <button
          name="imperial"
          className="temp-button far"
          onClick={handleUnits}
        >
          F°
        </button>
      </div>
    </div>
  );
}

export default Inputs;

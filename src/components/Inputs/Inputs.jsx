import React, { useState, useEffect } from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";

function Inputs({ setQuery }) {
  const [focus, setFocus] = useState(false);
  const [city, setCity] = useState("");

  /*search for city*/
  const handleSearch = () => {
    if (city !== "") {
      setQuery({ q: city, units: "imperial" });
    }
    setCity("");
  };

  /*get current location*/
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat: lat, lon: lon, units: "imperial" });
      });
    }
  };

  /*focus on searchbar*/
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
          type="text"
          placeholder="search..."
          className="search-bar"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && handleSearch();
          }}
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
    </div>
  );
}

export default Inputs;

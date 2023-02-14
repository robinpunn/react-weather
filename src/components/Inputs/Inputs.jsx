import React, { useState, useEffect } from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";
import "./Inputs.css";

function Inputs() {
  const [focus, setFocus] = useState(false);

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
          placeholder="search for city..."
          className="search-bar"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <UilSearch className="search-icon mag" size={25} />
        <UilMapMarker className="search-icon loc" size={25} />
      </div>
      <div className="temp">
        <button name="metric" className="temp-button cel">
          C°
        </button>
        <p className="separator">|</p>
        <button name="imperial" className="temp-button far">
          F°
        </button>
      </div>
    </div>
  );
}

export default Inputs;

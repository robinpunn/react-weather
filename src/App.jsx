import { useState } from "react";
import "./App.css";
import Cities from "./components/Cities/Cities";
import Forecast from "./components/Forecast/Forecast";
import Inputs from "./components/Inputs/Inputs";
import TempAndDetails from "./components/TempAndDetails/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";

function App() {
  return (
    <div className="App">
      <Cities />
      <Inputs />
      <TimeAndLocation />
      <TempAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;

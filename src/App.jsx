import "./App.css";
import Forecast from "./components/Forecast/Forecast";
import Inputs from "./components/Inputs/Inputs";
import TempAndDetails from "./components/TempAndDetails/TempAndDetails";
import Location from "./components/Location/Location";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "chicago", units: "imperial" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, ...units }).then((data) => {
        setWeather(data);
        console.log(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className="App">
      <Inputs setQuery={setQuery} />
      {weather && (
        <>
          <Location weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast title="5 day forecast" items={weather.newList} />
        </>
      )}
    </div>
  );
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import Forecast from "./components/Forecast/Forecast";
import Inputs from "./components/Inputs/Inputs";
import TempAndDetails from "./components/TempAndDetails/TempAndDetails";
import Location from "./components/Location/Location";
import Layout from "./components/Layout/Layout";

import getFormattedWeatherData from "./services/weatherService";
import setRandom from "./services/setRandom";
import { iconToImagePath } from "./services/weatherIcons";

function App() {
  const [query, setQuery] = useState({ q: setRandom(), units: "imperial" });
  const [units, setUnits] = useState("imperial");
  const [weather, setWeather] = useState(null);

  // console.log(weather.icon);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, ...units }).then((data) => {
        setWeather(data);
        console.log(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  useEffect(() => {
    if (weather && weather.icon) {
      const imagePath = iconToImagePath[weather.icon];
      document.body.style.backgroundImage = `url($../../assets/${imagePath})`;
    }
  }, [weather]);

  return (
    <div className="App">
      {weather && (
        <Layout icon={weather.icon}>
          <Inputs setQuery={setQuery} />
          <Location weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast title="5 day forecast" items={weather.newList} />
        </Layout>
      )}
    </div>
  );
}

export default App;

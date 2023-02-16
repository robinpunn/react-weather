import "./App.css";
import Cities from "./components/Cities/Cities";
import Forecast from "./components/Forecast/Forecast";
import Inputs from "./components/Inputs/Inputs";
import TempAndDetails from "./components/TempAndDetails/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import getWeatherData from "./services/weatherService";

function App() {
  const fetchWeather = async () => {
    const data = await getWeatherData("weather", { q: "Chicago" });
    console.log(data);
  };

  fetchWeather();

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

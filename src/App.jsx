import { useState } from "react";
import "./App.css";
import Cities from "./components/Cities/Cities";
import Inputs from "./components/Inputs/Inputs";
import TempAndDetails from "./components/TempAndDetails/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Cities />
      <Inputs />
      <TimeAndLocation />
      <TempAndDetails />
    </div>
  );
}

export default App;

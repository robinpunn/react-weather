import { useState } from "react";
import "./App.css";
import Cities from "./components/Cities/Cities";
import Inputs from "./components/Inputs/Inputs";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Cities />
      <Inputs />
      <TimeAndLocation />
    </div>
  );
}

export default App;

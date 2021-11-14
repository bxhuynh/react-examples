import React, { useState } from "react";
import "./App.css";
import Clock from "../components/Clock";
import BetterClock from "../components/BetterClock";

function App() {
  const [showClock, setShowClock] = useState(true);
  return (
    <div className="app">
      <h1> React hooks </h1>
      {showClock && <Clock />}
      <BetterClock />
      <button
        onClick={() => {
          setShowClock(!showClock);
        }}
      >
        Toggle Clock
      </button>
    </div>
  );
}

export default App;

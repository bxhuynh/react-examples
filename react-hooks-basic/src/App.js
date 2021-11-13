import React, { useState } from "react";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  const [showClock, setShowClock] = useState(true);
  return (
    <div className="app">
      <h1> React hooks </h1>
      {showClock && <Clock />}
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

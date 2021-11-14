import React, { useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  //useCallback vs useMemo
  function handleHeroClick() {}

  return (
    <div className="app">
      <h1>React hooks - memo</h1>
      <p className="count">{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <Hero name="hehe" onClick={handleHeroClick} />
    </div>
  );
}

export default App;

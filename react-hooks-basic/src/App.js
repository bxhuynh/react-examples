import React, { useState, useCallback, useMemo } from "react";
import "./App.scss";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  //useCallback vs useMemo

  const handleHeroClick = useCallback(() => {}, []);
  const data = useMemo(() => [{ a: 1 }], []);

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
      <Hero name="hehe" data={data} onClick={handleHeroClick} />
    </div>
  );
}

export default App;

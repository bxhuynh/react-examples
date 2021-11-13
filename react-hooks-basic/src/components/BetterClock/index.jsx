import React from "react";
import useClock from "../../hooks/useClock";

BetterClock.propTypes = {};

function BetterClock() {
  const { timeString } = useClock();

  return (
    <p
      style={{
        fontSize: 42,
        border: " 2px solid royalblue",
        borderRadius: 4,
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
      }}
    >
      {timeString}
    </p>
  );
}

export default BetterClock;

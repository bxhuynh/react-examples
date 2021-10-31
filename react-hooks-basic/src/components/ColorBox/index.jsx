import React, { useState } from "react";
import "./ColorBox.scss";

function getRandomColor() {
  const COLOR_LIST = ["#084C61", "#DB504A", "#e3b505", "#4f6d7a", "#56a3a6"];
  return COLOR_LIST[Math.trunc(Math.random() * 5)];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "#084C61";
    return initColor;
  });

  function handleBoxClick() {
    let newColor = getRandomColor();
    while (newColor === color) newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;

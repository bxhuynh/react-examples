import { useEffect, useRef, useState } from "react";

function getRandomColor(currentColor) {
  const COLOR_LIST = ["#084C61", "#DB504A", "#e3b505", "#4f6d7a", "#56a3a6"];
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;
  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 5);
  }
  return COLOR_LIST[newIndex];
}

function useMagicColor(props) {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  useEffect(() => {
    const intervalRef = setInterval(() => {
      let newColor = getRandomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);
  return color;
}

export default useMagicColor;

import React, {useContext} from "react";
import "./DotRing.scss";
import useMousePosition from "../../hooks/useMousePosition";
import {MouseContext} from "../../contexts/MouseContext";
import StyleContext from "../../contexts/StyleContext";

const DotRing = () => {
  const {isDark} = useContext(StyleContext);
  console.log(isDark);
  const {cursorType} = useContext(MouseContext);

  const {x, y} = useMousePosition();
  return (
    <>
      <div
        style={{left: `${x}px`, top: `${y}px`}}
        className={isDark ? "dark ring " + cursorType : "ring " + cursorType}
      ></div>
      <div
        className={isDark ? "dark dot " + cursorType : "dot " + cursorType}
        style={{left: `${x}px`, top: `${y}px`}}
      ></div>
    </>
  );
};

export default DotRing;

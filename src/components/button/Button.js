import "./Button.scss";
import React from "react";
import {useCursorChange} from "../../hooks/useCursorChange";

export default function Button({text, className, href, newTab}) {
  const cursorChange = useCursorChange();
  return (
    <div className={className} {...cursorChange}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}

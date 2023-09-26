import {useContext} from "react";
import {MouseContext} from "../contexts/MouseContext";

export function useCursorChange() {
  const {cursorChangeHandler} = useContext(MouseContext);

  return {
    onMouseEnter: () => cursorChangeHandler("hovered"),
    onMouseLeave: () => cursorChangeHandler("")
  };
}

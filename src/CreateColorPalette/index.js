import React from "react";
import "./CreateColorPalette.css";
import { TodoContext } from "../TodoContext";

function CreateColorPalette(props) {
  const { setChangeColor } = React.useContext(TodoContext);

  const onClickButton = () => {
    setChangeColor(true);
  };

  return (
    <button className="CreateColorPalette" onClick={onClickButton}>
      Color
    </button>
  );
}

export { CreateColorPalette };

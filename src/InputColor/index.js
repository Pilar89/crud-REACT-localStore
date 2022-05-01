import React from "react";
import { TodoContext } from "../TodoContext";
import "./InputColor.css";

function InputColor() {
  const [newTodoColor, setNewTodoColor] = React.useState("");
  const [alert, setAlert] = React.useState(false);

  const { setOpenModal, setChangeColor } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoColor(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
    setChangeColor(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoColor === "") {
      setAlert(true);

      return;
    }

    setChangeColor(false);
    document.getElementById("body").style.backgroundColor = newTodoColor;
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Cambiar color de fondo</label>

      <input type="color" onChange={onChange}></input>

      {alert && <h3>Debes seleccionar un color</h3>}

      <div className="InputColor-buttonContainer">
        <button
          type="button"
          className="InputColor-button InputColor-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="InputColor-button InputColor-button--add"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}

export { InputColor };

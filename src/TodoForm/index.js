import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [isEmptyText, setIsEmptyText] = React.useState(true);
  const [alert, setAlert] = React.useState(false);

  const { addTodo, setOpenModal, enEdit, setEnEdit, editTodo, textEdit } =
    React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    if (newTodoValue != "") {
      setIsEmptyText(false);
    }
  };
  const onCancel = () => {
    setOpenModal(false);
    setEnEdit(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (isEmptyText) {
      setAlert(true);
      return;
    }
    if (!enEdit) {
      addTodo(newTodoValue);
    } else {
      editTodo(textEdit, newTodoValue);
      setEnEdit(false);
    }
    setOpenModal(false);
    setNewTodoValue("");
    setIsEmptyText(true);
  };

  return (
    <form onSubmit={onSubmit}>
      {(enEdit && <label>Edita tu TODO</label>) || (
        <label>Escribe tu nuevo TODO</label>
      )}

      {(enEdit && (
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder={textEdit}
        />
      )) || (
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Tarea pendiente"
        />
      )}

      {alert && <h3>Debes agregar una tarea</h3>}

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Guardar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };

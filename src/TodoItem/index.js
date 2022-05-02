import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>

      <span className="Icon Icon.edit" onClick={props.onEdit}>
        <img src="curso-intro-react/edit1.png" className="Icon Icon.edit"></img>
        <h6>Edit</h6>
      </span>
    </li>
  );
}

export { TodoItem };

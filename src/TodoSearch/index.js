import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

//buca las tareas TO DO

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar To Do"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };

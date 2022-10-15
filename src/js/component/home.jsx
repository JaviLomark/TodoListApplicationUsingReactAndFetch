import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("")
  const [tareas, setTareas] = useState([])
  return (
    <div className="container-fluid myFondo">
      <h1>Todo List</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTareas(tareas.concat([inputValue]))
                setInputValue("")
              }
            }}
            placeholder="Añade una nueva tarea"
          ></input>
        </li>
        <div className="separador"></div>
        {tareas.map((item, index) => (
          <li>
            {item}{" "}
            <i
              class="fa-regular fa-trash-can"
              onClick={() =>
                setTareas(
                  tareas.filter((t, currentIndex) => index != currentIndex)
                )
              }
            ></i>
            <div className="separador"></div>
          </li>
        ))}
        <li className="myTareasPendientes">
          {tareas.length} Tareas pendientes
        </li>
      </ul>
    </div>
  );
};

export default Home;

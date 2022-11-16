import React, { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState("");
  const [taskOfList, setTaskOfList] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        await fetch(
          "https://assets.breatheco.de/apis/fake/todos/user/JaviLopez"
        )
          .then((response) => response.json())
          .then((data) => setTaskOfList(data));
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
  }, []);

  const putTasks = async (taskOfList) => {
    try {
      await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/JaviLopez",
        {
          method: "PUT",
          body: JSON.stringify(taskOfList),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (taskOfList.length > 0) {
      putTasks(taskOfList);
    }
  }, [taskOfList]);

  const deleteAllTask = async () => {
    setTaskOfList([]);
    try {
      fetch("https://assets.breatheco.de/apis/fake/todos/user/JaviLopez", {
        method: "PUT",
        body: JSON.stringify([{ label: "No hay tareas", done: false }]),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((data) => {if(data.result === "ok") {setTaskOfList([])}});
    } catch (error) {
      console.log(error);
    }
  };

  const handleTask = (e) => {
    if (e.key === "Enter") {
      if (tasks !== "") {
        setTaskOfList([...taskOfList, { label: tasks, done: false }]);
        setTasks("");
      } else {
        alert("Introduce tu tarea");
      }
    }
  };

  const deleteTask = (indexToDelete) => {
    setTaskOfList(
      taskOfList.filter((task, taskIndex) => taskIndex !== indexToDelete)
    );
  };

  return (
    <>
      <div className="row flex-wrap justify-content-center align-items-center gap-2 mb-5 mx-2">
        <div className="col-5 col-sm-3 ">
          <input
            type="text"
            className="form-control text-dark fw-bolder mb-4"
            placeholder="Introduce una tarea"
            aria-label="Username"
            onChange={(e) => setTasks(e.target.value)}
            value={tasks}
            onKeyDown={handleTask}
          />
        </div>

        <ul>
          {taskOfList.length === 0 && (
            <p className=" d-flex justify-content-center">No hay tareas</p>
          )}
          {taskOfList.map((item, i) => {
            return (
              <li
                key={i}
                className="d-flex justify-content-center text-dark item fw-bold"
              >
                {item.label}
                <p onClick={() => deleteTask(i)}>
                  <i className="fa-regular fa-trash-can"></i>
                </p>
              </li>
            );
          })}
        </ul>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-dark" onClick={deleteAllTask}>
            Eliminar todas las tareas
          </button>
        </div>
      </div>
    </>
  );
};
export default TaskList;

import React, { useState, useEffect, useReducer } from "react";
import TodoList from "./TodoList";
import { Context } from "./context";
import reducer from "./reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')))
  const [toDoTitle, setTodoTitle] = useState("");
  


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const addToDo = (event) => {
    if (event.key === "Enter") {
      dispatch({
        type: 'add',
        payload: toDoTitle
      })
      setTodoTitle("");
    }
  };



  return (
    <Context.Provider value = {{
      dispatch
    }}>
    <div className="container">
      <h1>Todo app</h1>

      <div className="input-field">
        <input
          type="text"
          value={toDoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
          onKeyPress={addToDo}
        />
        <label>Todo name</label>
      </div>

      <TodoList todos={state} />
    </div>
    </Context.Provider>
  );
}

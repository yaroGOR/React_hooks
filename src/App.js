import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [toDoTitle, setTodoTitle] = useState("");
  
  useEffect(() => {
    const raw = localStorage.getItem("todos") || [];
    console.log(raw)
    setTodos(JSON.parse(raw));
    
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToDo = (event) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: toDoTitle,
          completed: false,
        },
      ]);
      setTodoTitle("");
    }
  };

  return (
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

      <TodoList todos={todos} />
    </div>
  );
}

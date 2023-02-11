import React, { useState } from 'react'
import TodoList from './TodoList'

export default function App() {
  
  const [todos, setTodos] = useState(
    [
    {id: 1, title: 'First todo', completed: false},
    {id: 2, title: 'Second todo', completed: true},
  ])
  const [toDoTitle, setTodoTitle] = useState("")

  const addToDo = event => {
    if(event.key ==='Enter') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: toDoTitle,
          completed:false
        }

      ])
      setTodoTitle("")
    }
  }
    return (
      <div className="container">
        <h1>Todo app</h1>

          <div className="input-field">
            <input type="text" 
              value={toDoTitle}
              onChange={event=>setTodoTitle(event.target.value)}
              onKeyPress={addToDo}
            />
            <label>Todo name</label>
          </div>

          <TodoList todos={todos} />
      </div>
    );
  }

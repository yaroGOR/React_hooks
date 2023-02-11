import React, { useState } from 'react'
import { Context } from './context'
import { useContext } from 'react'

export default function TodoItem({title, id, completed}) {

  const [checked, setChecked] = useState(completed)

const {toggleTodo, removeTodo} = useContext(Context)

  const cls = ['todo']

  if(completed) {
    cls.push('completed')
  }

  return (
    <li className="todo">
      <label>
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={()=>toggleTodo(id)}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={()=> removeTodo(id)}
        >
          delete
        </i>
      </label>
    </li>
  )
}
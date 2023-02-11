import React, { useState } from 'react'

export default function TodoItem({title, id, completed}) {

  const [checked, setChecked] = useState(completed)
  const cls = ['todo']
  if(checked) {
    cls.push('completed')
  }

  return (
    <li className="todo">
      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={()=>setChecked(!checked)}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  )
}
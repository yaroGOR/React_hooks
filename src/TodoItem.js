import React, { useState } from 'react'
import { Context } from './context'
import { useContext } from 'react'

export default function TodoItem({title, id, completed}) {

const {dispatch} = useContext(Context)

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
          onChange={()=>dispatch({
            type:"toggle",
            payload: id
          })}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={()=> dispatch({
            type:'remove',
            payload: id
          })}
        >
          delete
        </i>
      </label>
    </li>
  )
}
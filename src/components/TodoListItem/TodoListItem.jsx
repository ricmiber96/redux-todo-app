import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorChanged, selectTodoById, todoDeleted, todoToggle } from '../../reducers/todoReducer'
import { availableColors, capitalize } from '../../utils/colors'

export default function TodoListItem ({ todoId }) {
  const dispatch = useDispatch()

  const todo = useSelector((state) => {
    return selectTodoById(state, todoId)
  })

  const { text, completed, color } = todo

  const handleCompletedChanged = (e) => {
    dispatch(todoToggle(todo.id))
  }

  const handleColorChanged = (e) => {
    const color = e.target.value
    dispatch(colorChanged(todo.id, color))
  }

  const handleDelete = () => {
    dispatch(todoDeleted(todo.id))
  }

  const colorOptions = availableColors.map((color, i) => (
    <option key={i} value={color} style={{ color }}>
        {capitalize(color)}
    </option>
  ))

  return (
        <>
        <li className="list-item py-4 text-lg font-semibold bg-gray-700 my-4 px-6 rounded-md">
            <div className="flex flex-row justify-between">
                <input
                className="toogle"
                type="checkbox"
                checked={completed}
                onChange={handleCompletedChanged}/>
                <div className="todo-text">{text}</div>
                <div className="todo-buttons">
                <select
                    style={{ color }}
                    value={color}
                    onChange={handleColorChanged}
                >
                    <option value=""></option>
                    {colorOptions}
                </select>
                <button className="destroy" onClick={handleDelete}>
                    X
                </button>
                </div>
            </div>
        </li>
        </>
  )
}

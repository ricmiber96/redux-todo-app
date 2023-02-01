import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { availableColors, capitalize } from '../../utils/colors'

export default function TodoListItem ({ todoID }) {
  const dispatch = useDispatch()

  const selectTodoById = (state, todoId) => {
    return state.todos.find((todo) => todo.id === todoId)
  }

  const todo = useSelector((state) => selectTodoById(state, todoID))
  const { text, completed, color } = todo

  const handleCompletedChanged = (e) => {
    dispatch({ type: 'todo/todoToggle', payload: todo.id })
  }

  const handleColorChanged = (e) => {
    const color = e.target.value
    dispatch({ type: 'todo/colorSelected', payload: { todoId: todo.id, color } })
  }

  const handleDelete = () => {
    dispatch({ type: 'todo/todoDeleted', payload: todo.id })
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

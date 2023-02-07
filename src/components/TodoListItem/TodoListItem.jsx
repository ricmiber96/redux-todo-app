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
        <li className="list-item py-4 text-lg font-semibold bg-gray-700 my-4 px-6 rounded-md shadow-md">
            <div className="flex flex-row justify-between items-center content-center">
                <input
                className={`toogle w-6 h-6 ${completed ? 'accent-purple-700' : ''}`}
                type="checkbox"
                checked={completed}
                onChange={handleCompletedChanged}/>
                <div className={`todo-text ${completed ? 'line-through decoration-2' : 'no-underline'}`}>{text}</div>
                <div className="todo-buttons text-white">
                <select
                    className='bg-gray-700 border border-gray-800 rounded-lg text-white p-4'
                    style={{ color }}
                    value={color}
                    onChange={handleColorChanged}
                >
                    <option selected value="">Choose a color</option>
                    {colorOptions}
                </select>
                <button className="deleted ml-4 bg-gray-800 border-2 border-gray-700 p-2.5 rounded-md" onClick={handleDelete}>
                    X
                </button>
                </div>
            </div>
        </li>
        </>
  )
}

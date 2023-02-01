import { React, useState } from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from '../TodoListItem/TodoListItem'

export default function TodoList () {
//   const selectTodos = state => state.todos
  const selectTodos = state => state.todos
  const todos = useSelector(selectTodos)
  const filter = useSelector(state => state.filters)
  console.log('HEEEY', todos, filter)

  const renderListItems = todos.map((todo) => {
    return <TodoListItem key={todo.id} todoID={todo.id}/>
  })

  return (
        <>
            <ul className="todo-list">{renderListItems}</ul>
        </>
  )
}

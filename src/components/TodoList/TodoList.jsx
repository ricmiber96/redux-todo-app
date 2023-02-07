import { React, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectFilteredTodoIds } from '../../reducers/todoReducer'
import TodoListItem from '../TodoListItem/TodoListItem'

export default function TodoList () {
//   const selectTodos = state => state.todos
  // const selectTodos = state => state.todos
  // const todos = useSelector(selectTodos)
  const todoIds = useSelector(selectFilteredTodoIds)
  const filter = useSelector(state => state.filters)

  const renderListItems = todoIds.map((todoId, i) => {
    return <TodoListItem key={i} todoId={todoId}/>
  })

  return (
        <>
            <ul className="todo-list">{renderListItems}</ul>
        </>
  )
}

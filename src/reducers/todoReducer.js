import { createSelector } from 'reselect'
import { StatusFilters } from './filterReducer'

const initialState = [
  { id: 0, text: 'Learn React', completed: true },
  { id: 1, text: 'Learn Redux', completed: false, color: 'red' },
  { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
]

function nextTodoId (todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export default function todoReducer (state = initialState, action) {
  switch (action.type) {
    case 'todo/todoAdded': {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false
        }
      ]
    }
    case 'todo/todoToggle': {
      return state.map((todo, i) => {
        if (todo.id !== action.payload) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    }

    case 'todo/colorChanged': {
      const { color, todoId } = action.payload
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo
        }
        return {
          ...todo,
          color
        }
      })
    }

    case 'todos/allCompleted': {
      return state.map((todo) => {
        return { ...todo, completed: true }
      })
    }

    case 'todo/completedCleared': {
      return state.filter((todo) => !todo.completed)
    }
    case 'todo/todoDeleted': {
      return state.filter((todo) => todo.id !== action.payload)
    }
    default: return state
  }
}
export const selectTodos = (state) => {
  return state.todos
}
export const selectTodoById = (state, todoId) => {
  return selectTodos(state).find((todo) => todo.id === todoId)
}

export const selectFilteredTodos = createSelector(
  selectTodos,
  state => state.filters,
  (todos, filters) => {
    const { status, colors } = filters

    if (status === StatusFilters.All && colors.length === 0) {
      return todos
    }

    const completedStatus = status === StatusFilters.Completed
    const filteredTodos = (todo) => {
      const statusMatches =
      status === StatusFilters.All || todo.completed === completedStatus
      const colorMatches = colors.length === 0 || colors.includes(todo.color)
      return statusMatches && colorMatches
    }
    return todos.filter(filteredTodos)
  }
)
export const selectFilteredTodoIds = createSelector(selectFilteredTodos, (filteredTodos) => filteredTodos.map((todo) => todo.id))

// ACTION CREATORS
export const todoAdded = (todo) => ({ type: 'todo/todoAdded', payload: todo })
export const todoToggle = (todoId) => ({ type: 'todo/todoToggle', payload: todoId })
export const todoDeleted = (todoId) => ({ type: 'todo/todoDeleted', payload: todoId })
export const colorChanged = (todoId, color) => ({ type: 'todo/colorChanged', payload: { todoId, color } })

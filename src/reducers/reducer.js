import filterReducer from './filterReducer'
import todoReducer from './todoReducer'

export default function rootReducer (state = {}, action) {
  return {
    todos: todoReducer(state.todos, action),
    filters: filterReducer(state.filters, action)
  }
}

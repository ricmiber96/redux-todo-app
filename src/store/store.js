import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../reducers/filterReducer'
import rootReducer from '../reducers/reducer'
import todoReducer from '../reducers/todoReducer'

// LOADING A INITIAL STATE
let previousState
const persistedTodosLocalStorage = localStorage.getItem('todos')

if (persistedTodosLocalStorage) {
  previousState = {
    todos: JSON.parse(persistedTodosLocalStorage)
  }
}

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filterReducer
  }
})

export default store

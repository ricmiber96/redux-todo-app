import { useState } from 'react'
import store from './store/store'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import Filters from './components/Filters/Filters'

function App () {
  // console.log('Initial state: ', store.getState())
  // store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
  // store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
  // store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })
  // console.log('Initial state: ', store.getState())
  return (
    <div className="App flex items-center justify-center">
      <div className="container flex flex-col  px-4 py-6">
        <Header/>
      <div className="flex flex-row items-start justify-around p-4">
          <div className="w-2/3">
          <TodoList/>
        </div>
        <div className="w-1/3 mx-4">
        <Filters/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import store from './store/store'

function App() {
  const [count, setCount] = useState(0)
  console.log('Initial state: ', store.getState())
  store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
  store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
  store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })

  store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'added' }
})
  console.log('Initial state: ', store.getState())
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

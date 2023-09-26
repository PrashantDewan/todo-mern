import React from 'react'
import Header from './Components/Header'
import TodoForm from './Components/TodoForm'
import Todos from './Components/Todos'

const App = () => {
  return (
    <div>
      < Header />
      <TodoForm />
      <Todos />
    </div>
  )
}

export default App

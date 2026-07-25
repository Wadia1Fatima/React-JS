import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'


function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="w-full max-w-2xl p-6">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Redux Toolkit Todo
        </h1>

        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
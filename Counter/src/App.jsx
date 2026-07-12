import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  // let counter = 0;

  const addValue = () => {
    if (counter < 20)
      setCounter(counter + 1);
  }

  const decreaseValue = () => {
    if (counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}>Increase Counter</button>
      <br />
      <button
      onClick={decreaseValue}>Decrease Counter</button>
    </>
  )
}

export default App

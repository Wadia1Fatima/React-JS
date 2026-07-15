import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card1 from './Components/Card1'

function App() {
  return (
    <>
      <h1 className="text-4xl font-black tracking-widest text-emerald-400 uppercase drop-shadow-[0_5px_5px_rgba(52,211,153,0.3)]">
        Tailwind is Working!
      </h1>
      <Card1 />
    </>
  )
}

export default App


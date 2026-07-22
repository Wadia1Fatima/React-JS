import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  console.log("numAllow:", numAllow);
  console.log("charAllow:", charAllow);
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*()_-+=[]{}~`|<>?/:;.,"

    for(let i = 1; i <= length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numAllow, charAllow, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-2 my-8 text-red-800 bg-gray-400'>
        <h1 className='text- 2xl text-center text-white my-3'>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type = "text"
            value = {password} 
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='Password'
            readOnly 
          />
          <button className='outline-none bg-blue-700 text-white px-3 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type = "range"
              min = {8}
              max = {100}
              value = {length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type = "checkbox"
              defaultChecked = {numAllow}
              id = "numberInput"
              onChange={(e) => {
                setNumAllow((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type = "checkbox"
              defaultChecked = {charAllow}
              id = "charInput"
              onChange={(e) => {
                setCharAllow((prev) => !prev)
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Hello World in Main</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// } => This does not work because in react we can not do anything by our own we have to use a method called .createElement

const anotherElement = (
  <a href = "https://google.com" target = '_blank'>Visit Google</a>
)

const anotherUser = "Wadia Fatima"

const reactElement = React.createElement(
  'a', //type of element
  {href: 'https://google.com', target: '_blank'}, // attributes of element ... if none, keep it emepty but it is a must
  'Click me to Visit Google', //children - text to be injected in anything
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <myApp /> => this is wrong because it starts with lowercase ... React says lowercase -> HTML, uppercase -> React Component 
//     <MyApp />
// </StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  reactElement
)
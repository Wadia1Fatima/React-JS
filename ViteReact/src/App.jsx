
import Greetings from './Greetings.jsx'

function App() { 
  const username = "Wadia"
  return (
    //functions can return only one element so we group all the elements to be returned in <></> or in a <div></div>
    <>
      <Greetings />
      <h1>Welcome, {username} :)</h1> 
      {/* this is known as an evaluated expression */}
    </>
  )
}

export default App

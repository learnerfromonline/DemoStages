import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reducrs from './Reducers'
import Todo from './Components/TODOS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>The Count is {count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increment</button> */}
      {/* <Reducrs/> */}
      <Todo/>
    </>
  )
}

export default App

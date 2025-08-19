import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyContainer from './components/MyMain/MyContainer'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyContainer/>
   </>
  )
}

export default App

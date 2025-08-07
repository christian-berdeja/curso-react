import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=''>¡Bienvenido a mi aplicación de React!</h1>
      <h2>Lista de cosas por hacer:</h2>
      <ul>
        <li>Aprender React</li>
        <li>Practicar con Vite</li>
        <li>Construir proyectos increibles</li>
      </ul>
    </>
  )
}

export default App

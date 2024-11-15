import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-green-400'>Tailwind Test</h1>
      <Card Title="Introduction" Heading="My name is Rv" />
      <Card Title="Weakness" Heading="My name is 100rv"/>
    </>
  )
}

export default App

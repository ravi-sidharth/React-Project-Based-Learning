import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-auto container mt-5 p-10 bg-red-100'>
        <h1 className='text-center text-3xl font-bold text-red-900'>
          Let's Start Redux Toolkit
        </h1>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, Routes,Route} from 'react-router-dom'

import Nav from './Components/Nav'
import Router from './Utils/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Nav/>
      <Router/>

      
    </>
  )
}

export default App

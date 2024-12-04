import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'
import UserDetail from '../Components/UserDetail'


function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/contact/:name" element={<UserDetail/>} />
    </Routes>
  )
}

export default Router

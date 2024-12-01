import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useForm} from 'react-hook-form'

function App() {

  // By Using useRef
  // const name =useRef(null)
  // const age =useRef(null)
  // const handleSubmit=(event)=> {
  //   event.preventDefault()
  //   console.log(name.current.value)
  //   console.log(age.current.value)
  // }

  //Control components
  // const [data,setData] =useState({name:"",age:"",email:""})
  // const handleSubmit=(event)=> {
  //   event.preventDefault()
  //   console.log(data.name ,data.age, data.email);
  // }

  // React Hook 
  const {register,handleSubmit} = useForm()
    
  return (
    // By Using Useref
    // <form onSubmit={handleSubmit} action="">
    //   <input ref={name} type="text" placeholder='Name'/>
    //   <input ref={age} type="text" placeholder='Age'/>
    //   <input type="submit" />
    // </form>

    // By using control Component 
      //   <form onSubmit={handleSubmit} action="">
      // <input onChange={(event)=>setData({...data,name:event.target.value})} type="text" placeholder='Name'/>
      // <input onChange={(event)=>setData({...data,age:event.target.value})} type="text" placeholder='Age'/>
      // <input onChange={(event)=>setData({...data,email:event.target.value})} type="email" placeholder='Email' />
      // <input  type="submit" />
      // </form>

    // By using React hook
    <form action="" onSubmit={handleSubmit(data=> console.log(data))}>
        <input {...register('name')} type="text" placeholder='Name' />
        <input {...register('email')} type="email" placeholder='Email' />
        <input type="submit" />
    </form>

  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementByAmount, incrementAsync } from './Reducers/CounterSlice'

function App() {
  const {value} =useSelector(state=>state.counter)
  const dispatch = useDispatch()
  
  return (
    <div className='m-auto container mt-5 p-10 bg-red-100'>
        <h1 className='text-center text-3xl font-bold text-red-900'>
          Counter: {value}
        </h1>
        <div className='text-center'>
        <button onClick={()=>dispatch(increment())} className='text-red-900 border-red-800 border-2 bg-transparent px-5 py-2 mt-10'>Increment</button>
        <button onClick={()=>dispatch(decrement())} className='text-red-900 border-red-800 border-2 bg-transparent px-5 py-2 mt-10 mx-5'>Decrement</button>
        <button onClick={()=>dispatch(incrementAsync(5))} className='text-red-900 border-red-800 border-2 bg-transparent px-5 py-2 mt-10'>Increment by 5</button>
        </div>
    </div>
  )
}

export default App

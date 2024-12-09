import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { userdelete } from './Reducers/UserReducer'

function App() {
  const dispatch = useDispatch()

  // Delete data handler 
    // const deleteHandler=(index)=> {
    //   console.log(index)
    //   dispatch(userdelete(index))
    // }

    const {users} = useSelector(state=>state.userReducers)
    // console.log(users)
  return (
    <div className='m-auto container p-10 bg-red-100'>
        <h1 className='text-3xl mb-5 font-bold text-red-900'>
          User List
        </h1>
        {users.map((user,index)=> {
          return <div key={user.name} className=''>{user.name} <span onClick={()=>dispatch(userdelete(index))} className='text-red-600 font-bold cursor-pointer'>X</span></div>
        })}
        
    </div>
  )
}

export default App

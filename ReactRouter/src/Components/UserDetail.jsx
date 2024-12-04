import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
    const {name} =useParams()
    // console.log(name)
    const navigate = useNavigate()
    const goBackHandler=()=> {
        // indono me se koi sa bhi use kar skte he ek step back ke liye 
        // navigate("/ contact")

        // Jab hame pichle wale ka url nahi pta ya hame ese hi karna he
        navigate(-1)
    }
    
  return (
    <div className='w-1/2 m-auto mt-10'>
        <h1 className='text-red-200 text-5xl mb-2'>User Detail </h1>
        <h1 className='text-3xl'>Hii, {name}!</h1>
        <button onClick={goBackHandler} className='text-white px-3 py-2 bg-zinc-300'>Go Back</button>
    </div>
  )
}

export default UserDetail

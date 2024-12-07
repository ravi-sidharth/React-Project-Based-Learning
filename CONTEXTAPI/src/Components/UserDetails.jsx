import React, { useContext } from 'react'
import { UserContext } from '../Context/Context'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
  const {id} =useParams()
  const {users}= useContext(UserContext)
  console.log(users[id])

  const navigate = useNavigate()
  
  return (
    <div className='flex justify-center gap-5'>
      <h1 className='text-4xl text-red-500'>{users[id].username}</h1>
      <h1 className='text-4xl text-red-500'>{users[id].age}</h1>
      <button onClick={()=>navigate("/user")} className='px-2 py-2 bg-green-500 rounded '>Go Back</button>
    </div>
  )
}
export default UserDetails

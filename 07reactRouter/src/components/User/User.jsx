import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
  const {userId} = useParams()
  return (
    <div className='text-4xl bg-gray-400 text-white '>User: {userId}</div>
  )
}

export default User

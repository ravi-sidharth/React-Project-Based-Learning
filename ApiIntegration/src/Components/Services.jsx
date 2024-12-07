import React, { useEffect, useState } from 'react'
import axios from '../Utils/axios'

function Services() {
    const [first, setFirst]=useState("This is normal data")
    const [second, setSecond]=useState("This is very large data")

    const getUsers=()=> {
      axios
        .get(`users`)
        .then((user) => console.log(user.data))
        .catch((e) => console.log(e));
    };
    useEffect(()=>{
      getUsers()
        console.log("Service component is created!")
        return ()=> console.log("Servive component is deleted!")
    },[second])
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={()=>setFirst("Normal data has been changed")} className='rounded bg-blue-300 p-3 mb-10' >Change Normal Data</button>

      <h1>{second}</h1>
      <button onClick={()=>setSecond("Large data has been changed")} className='rounded bg-red-300 p-3'>Change Large Data</button>
    </div>
  )
}

export default Services

import React, { useState,useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/ravi-sidharth')
    //     .then(res=> res.json())
    //     .then(data=> {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
      <div className='text-3xl bg-gray-600 m-4 p-4'>Github Follower:{data.followers} 
        <img src={data.avatar_url} alt="Github Picture" width={300}/>
      </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/ravi-sidharth')
    return res.json() 
}
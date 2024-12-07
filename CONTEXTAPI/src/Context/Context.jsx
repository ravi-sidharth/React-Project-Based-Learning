import React, { createContext, useState } from 'react'

export const UserContext =createContext()

function Context(props) {
    const [users, setUsers]=useState([
        {id:0, username:"Ravi", age:22},
        {id:1, username:"Rahul", age:19},
        {id:2, username:"Ram", age:27},
        {id:3, username:"Raju", age:25},
    ])
    // console.log(props)
  return <UserContext.Provider value={{users,setUsers}}>{props.children}</UserContext.Provider>
}

export default Context

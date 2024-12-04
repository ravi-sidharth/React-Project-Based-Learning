import React from 'react'
import {Link,NavLink} from 'react-router-dom'   

function Nav() {
  return (
      <nav>
        <NavLink  style={(e)=>{
        return {color:e.isActive?"tomato":""}
        }} to="/">Home</NavLink>

        <NavLink 
        className={(e)=>
             [e.isActive? "text-yellow-700":"",
                e.isActive?"font-bold":""
             ].join(" ")
        }
            to="/about">About</NavLink>
        <NavLink to="/contact">
            {(e)=> {
                return(
                    <span className={[
                        e.isActive?"text-blue-500":" ",
                        e.isActive?"font-bold":" "
                    ].join(" ")}>Contact</span>
                )  
        }}
       </NavLink>
      </nav>
    
  )
}

export default Nav

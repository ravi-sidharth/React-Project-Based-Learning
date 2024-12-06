import React, { useEffect } from 'react'

function Services() {
    useEffect(()=>{
        console.log("Service component is created!")
        return ()=> console.log("Servive component is deleted!")
    })
  return (
    <div>
      Service
    </div>
  )
}

export default Services

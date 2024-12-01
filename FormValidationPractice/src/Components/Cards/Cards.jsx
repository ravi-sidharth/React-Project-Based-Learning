import React from 'react'
import Card from './Card'

function Cards({users,handleRemoveData}) {
  return (
      <div className="w-full max-h-96 flex items-center justify-center flex-wrap gap-4 p-4">
        
        {users.map((item,index)=> {
          return <Card handleRemoveData={handleRemoveData} id={index} user={item} key={index} />
        })}
      </div>
  )
}

export default Cards

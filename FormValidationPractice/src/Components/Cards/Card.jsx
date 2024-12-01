import React from 'react'

function Card({user,handleRemoveData,id}) {
  return (
    <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col  items-center p-2 overflow-hidden'>
         <div className='image w-[3vw] h-[3vw] rounded-full bg-zinc-100'>
           <img className='w-full h-full rounded-full object-cover'  src={user["image url"]} alt="" />
           </div>
         <h1 className='mt-1 text-xl font-semibold text-center leading-none'>{user.name}</h1>
         <h4 className='opacity-40 text-xs font-semibold'>{user.email}</h4>
         <p className='mt-1 text-center text-xs font-semibold leading-1 tracking-tight mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptas!</p>
         <button onClick={()=>handleRemoveData(id) } className="px-3 py-1 bg-red-600 text-xs rounded-lg font-semibold text-white">Remove It</button>
       </div>
    
  )
}

export default Card

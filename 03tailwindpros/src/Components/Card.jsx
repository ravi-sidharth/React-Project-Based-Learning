
import React from 'react'
function Card({Title,Heading,Image,inStock}) {
  
  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
          <img
            src={Image}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
              {Title}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">{Heading}</h2>
          </div>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
            amet
          </p>
        </div>
        <button onClick={()=> {alert(`Sell! Sell@ Sell`)}} className={`px-2 py-1 ${inStock?"bg-blue-400":"bg-red-600"} rounded-md mt-2`}>{inStock?"In Stock":"Out Of Stock"}</button>
    </div>
  )
}

export default Card


import React from 'react'
function Card({Title,Heading }) {
  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
          <img
            src="https://images.pexels.com/photos/29276458/pexels-photo-29276458.jpeg?cs=srgb&dl=pexels-vivek-tedla-2076460171-29276458.jpg&fm=jpg"
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
    </div>
  )
}

export default Card

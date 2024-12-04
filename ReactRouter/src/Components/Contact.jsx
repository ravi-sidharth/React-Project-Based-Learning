import React from 'react'
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div className=' flex flex-col justify-end gap-2'>
        <Link to="/contact/deepak" className='py-1 px-2 bg-pink-600'>Deepak</Link>
        <Link to="/contact/saurabh" className='py-1 px-2 bg-pink-600'>Saurabh</Link>
        <Link to="/contact/sandeep" className='py-1 px-2 bg-pink-600'>Sandeep</Link>
      </div>
    </div>
  )
}

export default Contact

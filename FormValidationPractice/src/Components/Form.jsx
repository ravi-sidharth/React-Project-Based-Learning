import React from 'react'
import {useForm} from 'react-hook-form'

function Form({handleFormSubmitData}) {
    const {register,handleSubmit,reset}=useForm()

    const handleFormSubmit =(data)=> {
        handleFormSubmitData(data)
        reset()
    }

  return (
    <div className='mt-10 flex gap-10 justify-center'>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='flex gap-10'>
        <input type="text" {...register("name")} className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='name' />
        <input type="text" {...register("email")} className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='email' />
        <input type="text" {...register("image url")} className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='image url' />
        <input type="submit" className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold' />
      </form>
    </div>
  )
}

export default Form

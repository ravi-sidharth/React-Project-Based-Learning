import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './Components/Cards/Cards'
import Form from './Components/Form'

function App() {
  const [users, setUsers] = useState([])
  
  const handleFormSubmitData =(data)=> {
    setUsers([...users,data])
  }

  const handleRemoveData =(id)=> {
    setUsers(()=>users.filter((items, index)=>index!=id))
  }
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center '>
      <div className='container mx-auto '>
        <Cards handleRemoveData={handleRemoveData} users={users} />
      
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  )
}

export default App

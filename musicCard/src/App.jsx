import { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

function App() {
  const data = [
    { Name:"Aa Kabutar Aa",artist:"Deepak",img:"https://images.pexels.com/photos/29549363/pexels-photo-29549363/free-photo-of-vibrant-european-robin-perched-in-nature.jpeg", added: false },
    { Name:"Love is Easy",artist:"Saurabh",img:"https://images.pexels.com/photos/29549363/pexels-photo-29549363/free-photo-of-vibrant-european-robin-perched-in-nature.jpeg", added: true },
    { Name:"Tera Bina ",artist:"Sandeep",img:"https://images.pexels.com/photos/29549363/pexels-photo-29549363/free-photo-of-vibrant-european-robin-perched-in-nature.jpeg", added: false },
    { Name:"Tera Milna Baate Karna",artist:"Karan",img:"https://images.pexels.com/photos/29549363/pexels-photo-29549363/free-photo-of-vibrant-european-robin-perched-in-nature.jpeg", added: true },
  ]
  const [songData, setSongData] = useState(data)

  const handleClick=(songIndex)=> {
    setSongData((prev)=>{
      return prev.map((item,index)=>{
        if (songIndex==index) return {...item , added:!item.added}
        return item 
      })
    })
  }

  return (
    <div className='w-screen h-screen bg-zinc-300 '>
      <Navbar data={songData}/>
      <div className='flex flex-wrap gap-4 px-40 mt-10 '>
          {songData.map((obj,index)=> <Card handleClick={handleClick} data={obj} index={index} key={index}/>)}
      </div>
    </div>
  )
}

export default App

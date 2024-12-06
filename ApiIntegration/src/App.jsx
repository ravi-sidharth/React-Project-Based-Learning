import {Routes,Route, Link} from 'react-router-dom'
import Home from "./Components/Home"
import Services from "./Components/Services"
import Show from "./Components/Show"


function App() {

  return (
    <div  className='pt-[5%] pl-[5%]'>
      <div className='flex justify-center gap-10 text-3xl '>
        <Link to="" >Home</Link>
        <Link to="Services" >Services</Link>
        <Link to="Show" >Show</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Services" element={<Services/>} />
        <Route path="Show" element={<Show/>} />
      </Routes>

    </div>
  )
}

export default App

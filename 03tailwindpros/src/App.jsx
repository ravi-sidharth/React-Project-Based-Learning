import Card from './Components/Card'
import './App.css'

function App() {
    const data = [
      {image:"https://images.pexels.com/photos/29276458/pexels-photo-29276458.jpeg?cs=srgb&dl=pexels-vivek-tedla-2076460171-29276458.jpg&fm=jpg", title:"Introduction", heading:"My name is Sultan", inStock:true},
      {image:"https://images.pexels.com/photos/29276458/pexels-photo-29276458.jpeg?cs=srgb&dl=pexels-vivek-tedla-2076460171-29276458.jpg&fm=jpg", title:"Introduction", heading:"My name is Sultan", inStock:false},
      {image:"https://images.pexels.com/photos/29276458/pexels-photo-29276458.jpeg?cs=srgb&dl=pexels-vivek-tedla-2076460171-29276458.jpg&fm=jpg", title:"Introduction", heading:"My name is Sultan", inStock:true},
      {image:"https://images.pexels.com/photos/29276458/pexels-photo-29276458.jpeg?cs=srgb&dl=pexels-vivek-tedla-2076460171-29276458.jpg&fm=jpg", title:"Introduction", heading:"My name is Sultan", inStock:false},
      {image:"https://images.pexels.com/photos/29276458/pexels-photo-29276458.jpeg?cs=srgb&dl=pexels-vivek-tedla-2076460171-29276458.jpg&fm=jpg", title:"Introduction", heading:"My name is Sultan", inStock:true}
    ]
  return (
    <>
      <h1 className='text-green-400'>Tailwind Test</h1>
      <Card Image="https://images.pexels.com/photos/29276458/pexels-photo-29276458.jpeg?cs=srgb&dl=pexels-vivek-tedla-2076460171-29276458.jpg&fm=jpg" Title="Introduction" Heading="My name is Rv" inStock={true} />
      <Card Image="https://images.pexels.com/photos/29276458/pexels-photo-29276458.jpeg?cs=srgb&dl=pexels-vivek-tedla-2076460171-29276458.jpg&fm=jpg" Title="Weakness" Heading="My name is 100rv"inStock={false}/>
      {data.map((ele,index)=>(<div key={index} className="max-w-xs p-6 rounded-md shadow-md bg-black">
          <img
            src={ele.image}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
              {ele.title}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">{ele.heading}</h2>
          </div>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
            amet.
          </p>
          <button onClick={()=> alert(`If you buy more than 500 you will get a 200 rupees  instant discount!`)} className={`px-2 py-1 ${ele.inStock?"bg-blue-400":"bg-red-600"} rounded-md mt-2`}>{ele.inStock?"In Stock":"Out Of Stock"}</button>
        </div>))}
    </>
  )
}

export default App

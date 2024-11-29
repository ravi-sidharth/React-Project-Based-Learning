import { useState } from "react";

function App() {
  const [counter,setCounter]=useState(0)
  const [val,setVal]=useState({name:"Ravi", isLoggedIn:false})
  const [value,setValue] = useState([1,2,3,4,5,6])
  const [avalue,setbValue]= useState([
    {name:"Ravi",age:21},
    {name:"Rahul",age:23},
    {name:"Ram",age:20},
    {name:"Raju",age:19}
  ])

  const addValue =(PrevCounter) => {
    if (counter<20) {
      setCounter(PrevCounter => PrevCounter+1)
      setCounter(PrevCounter => PrevCounter+1)
      setCounter(PrevCounter => PrevCounter+1)
      console.log(PrevCounter);
    }
  }
  
  const removeValue = () => {
    if (counter>0) {
      setCounter(counter-1)
      console.log(counter-1);
    }  
  }

  return (
    <>
      <h1>UseState in React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove value {counter}</button>
      {/* I Used Object Desturing for storing the object value */}
      <h1>Name: {val.name} || isLoggedIn: {val.isLoggedIn.toString()}</h1>
      <button className="bg-blue-600" onClick={()=> setVal({...val,isLoggedIn:!val.isLoggedIn})}>Change</button>
      <div>{value.map(ele =><h1>{ele}</h1>)}</div>
      {/* My doubt is when I am taking only index it return from end and when I am taking both then work properly */}
      <button onClick={()=>setValue(()=>value.filter((ele,index)=>index!=value.length-1))}>Remove Last Index</button>
      <div><button onClick={()=>setValue([...value,7])}>Add value</button></div>
      
      <div>
        {avalue.map((ele)=>{
          return <h1>My Name is {ele.name} and I'm {ele.age} year old. {ele?.email}</h1>
        })}
      </div>

      {/* array me object ke kisi bhi key ,value ko change karne ke liye us index me jo object he usme jitne element he sabka naam likhna padega*/}
      <button onClick={()=>setbValue(()=>avalue.map(ele=>ele.name!="Ram"?ele:{name:"Ram",age:22}))}>array object</button>
    </>
  )
}
export default App

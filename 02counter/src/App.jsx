import { useState } from "react";

function App() {
  const [counter,setCounter]=useState(0)

  const addValue =() => {
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
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App

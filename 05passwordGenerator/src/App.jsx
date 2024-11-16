import { useState, useCallback, useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed ,setNumberAllowed] = useState(false)
  const [charAllowed ,setCharAllowed] = useState(false)
  const [password ,setPassword] = useState("")

  // useRef hook 
  const passwordRef =useRef(null) 

  const passwordGenerator =useCallback(()=> {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str+="0123456789"
    if (charAllowed) str+="`~!@#$%^&*()_-+={[}]:;'<,>.?/|"

    for (let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard =useCallback(()=> {
    // Jab Pura text select Karna ho 
    passwordRef.current?.select()
    // Jab kuchh text select karna ho us case me ham ye method use kar sakte he iske liye upr select() bhi likhna padega iske sath. 
    passwordRef.current?.setSelectionRange(4,20)
    // window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-600'>
        <h1 className='text-2xl mb-3 text-center text-white'>Password Generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input className='outline-none w-full py-1 px-3' type="text" value={password} placeholder='Password' ref={passwordRef} readOnly />
          <button className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input className='cursor-pointer ' type="range" min={8} max={100} value={length} onChange={(e)=>setLength(e.target.value)} />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>setNumberAllowed((prev)=> !prev)} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>setCharAllowed((prev)=> !prev)} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

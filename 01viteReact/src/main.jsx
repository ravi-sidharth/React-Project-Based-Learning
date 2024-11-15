import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp() {
  return (
    <div>
      <h1>My Friend Name is {anotherUser} </h1>
    </div>
  )
}

// const ReactElement = {
//   type:'a',
//   props: {
//       href:"https://google.com",
//       target:"_blank"
//   },
//   children:"Click me to visit google"
// }

const anotherUser = " Saurabh Bharti"

const ReactElement = React.createElement(
  'a',
  {href:"https://google.com", target:"_blank"},
  "Click me to visit google",
  anotherUser

)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
createRoot(document.getElementById('root')).
render(
    <div>
       {ReactElement}
      <MyApp/>
      {anotherElement}
    </div>
)

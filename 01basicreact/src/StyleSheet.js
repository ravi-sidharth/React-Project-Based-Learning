import React from 'react'
import './myStyles.css'
function Stylesheet(pros) {
  let className = pros.primary? 'primary':''
  return (
    <div>
      <h1 className ={`${className} font-xl`} >StyleSheet</h1>
    </div>
  )
}

export default Stylesheet

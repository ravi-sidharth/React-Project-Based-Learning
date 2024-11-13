import React from 'react'

const Person =({person,key})=> {
  return (
    <div>
      <h2>I'm {person.name}. I'm {person.age} years old. and I know {person.skill}</h2>
    </div>
  )
}
export default Person

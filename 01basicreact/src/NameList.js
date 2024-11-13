import React from 'react'
import Person from './Person'

function NameList() {
  const persons =
    [
      {
        id:1,
        name:"Ravi",
        age:22,
        skill:"Frontend developer"
      },
      {
        id:2,
        name:"Sandeep",
        age:21,
        skill:"Full Stack developer"
      },
      {
        id:3,
        name:"Deepak",
        age:20,
        skill:"Backend developer"
      }
    ]
    const personList = persons.map(person=> <Person key={person.id} person={person}/>)
 
return <div>{personList}</div>
}

export default NameList

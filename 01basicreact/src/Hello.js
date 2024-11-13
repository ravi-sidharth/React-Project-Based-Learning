import React from "react";

const Hello = (props)=> {
    // console.log(props)
    // const{name , heroName} =props
 
    return (
        <div>
            <p>Hello {props.name} a.k.a {props.heroName}</p>
           {props.children}
        </div>        
    )
    // return React.createElement('div',{className:"dummy",id:"main-div"},React.createElement('h1',null,'Hello Ravi'))
}

export default Hello        
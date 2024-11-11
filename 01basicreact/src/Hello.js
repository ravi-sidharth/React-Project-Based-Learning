import React from "react";

const Hello = ({name, heroName})=> {
    // console.log(props)
    // const{name , heroName} =props
 
    return (
        <div>
            <p>Hello {name} a.k.a {heroName}</p>
            {/* {pros.children} */}
        </div>        
    )

    // return React.createElement('div',{className:"dummy",id:"main-div"},React.createElement('h1',null,'Hello Ravi'))
}

export default Hello        
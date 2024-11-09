import React from "react";

const Hello = (pros)=> {
    console.log(pros)
 
    return (
        <div>
            
            <p>Hello {pros.name} a.k.a {pros.heroName}</p>
            {pros.children}
        </div>        
    )

    // return React.createElement('div',{className:"dummy",id:"main-div"},React.createElement('h1',null,'Hello Ravi'))
}

export default Hello        
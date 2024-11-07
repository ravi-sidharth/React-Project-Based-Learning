import React from "react";

const Hello = ()=> {
    // return (
    //     <div>
    //         <p>Hello Ravi</p>
    //     </div>        
    // )

    return React.createElement('div',null,React.createElement('h1',null,'Hello Ravi'))
}

export default Hello        
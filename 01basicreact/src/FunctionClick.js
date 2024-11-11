import React from "react";

function FunctionClick() {
    function clickHandler() {
        console.log("Button clicked");
        
    }
    return (
        <div>
            {<button onClick={clickHandler}>Click</button>} {/* clickhandler() to ye automatic call ho jayega lekin hame call nahi karna he is event function ko */ }
        </div>
    )
}

export default FunctionClick
import React, { Component } from 'react'

class ClassClick extends Component {
   
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    )
  }

  clickHandler() {
    console.log("button clicked");
    
}
}

export default ClassClick

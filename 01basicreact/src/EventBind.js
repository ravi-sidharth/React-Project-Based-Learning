import React, { Component } from 'react'

class EventBind extends Component {
    EventClick(){
        console.log(this);
        console.log("button EventClick")
        
        this.setState({
            message:"Good Bye"
        })
        
    }
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }
    }

    
  render() {
    return (
      <div>
            <div>{this.state.message}</div>
            <button onClick={this.EventClick.bind(this)}>Click</button>
    
      </div>
    )
  }
}

export default EventBind

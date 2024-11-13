import React,{Component} from 'react'

class EventBind extends Component {
    //     ClickHandler(){
    //     console.log(this);
    //     console.log("button ClickHandler")
        
    //     this.setState({
    //         message:"Goodbye!"
    //  })
        
    // }

    ClickHandler = () => {
      this.setState({
        message:"Goodbye!"
      })
    }
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }
      this.ClickHandler = this.ClickHandler.bind(this)
    }

    
  render() {
    return (
      <div>
            <div>{this.state.message}</div>
            {/* <button onClick={this.ClickHandler.bind(this)}>Click</button> */}
            {/* <button onClick={()=> this.ClickHandler()}>Click</button> */}
            <button onClick={this.ClickHandler}>Click</button>
    
      </div>
    )
  }
}

export default EventBind

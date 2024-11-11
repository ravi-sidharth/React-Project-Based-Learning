import React , {Component} from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message :"Welcome Visitor"
        }
    }

    changeMessage() {
        // console.log(this)
        this.setState ({
            message: "Thanks For Subscribing"
        }) 
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }

}
export default Message 
import React, {Component} from "react";

class Counter extends Component {
    constructor() {
        super()

        this.state = {
            count :0
        }
    }

    increment() {
    //     this.setState(
    //     {
    //        count:this.state.count +1
    //     },
    //     ()=> console.log("Callback Value: ",this.state.count)
    //    )
    //     console.log(this.state.count)
        this.setState(prevState=> ({
        count:prevState.count+5
    }))

    }

    // async incrementFive() {
    //    await this.increment()
    //    await this.increment()
    //    await this.increment()
    //    await this.increment()
    //    await this.increment()
    // }

  
    render() {
        return(
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=> this.increment()}>Increment</button>
            </div>
        )
}
}

export default Counter
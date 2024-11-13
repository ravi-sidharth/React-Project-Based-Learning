import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // short-circuit operator
        return (this.state.isLoggedIn && <div>Welcome Ravi</div>)

        // ternary operator 
        // return (this.state.isLoggedIn ? <div>Welcome Ravi</div> :<div>Welcome Guest</div>)

        // with the help of variable show the value 
        // let message 
        // if (this.state.isLoggedIn) {
        //     message = <div>Welccome Ravi</div>
        // } 
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return message 

        // Use If else statement to show the value 
        // if (this.state.isLoggedIn) {
        //     return <div>Welccome Ravi</div>
        // } 
        // else {
        //     return  <div>Welcome Guest</div>
        // }

        // return (
        //   <div>
        //     <div>Welcome Ravi</div>
        //     <div>Welcome Guest</div>
        //   </div>
        // )
    }
}
export default UserGreeting

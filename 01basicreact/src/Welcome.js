import React,{Component} from 'react';

class Welcome extends Component{
    render() {
        // console.log(this)
        // console.log(this.props);
        const {name:Nm,heroName:hName} =this.props

        return <h1>Welcome {Nm} also known as {hName}</h1>
    }
}
export default Welcome
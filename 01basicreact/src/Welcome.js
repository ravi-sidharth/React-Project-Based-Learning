import React,{Component} from 'react';

class Welcome extends Component{
    render() {
        // console.log(this)
        // console.log(this.props);

        return <h1>Welcome {this.props.name} also known as {this.props.heroName}</h1>
    }
}
export default Welcome
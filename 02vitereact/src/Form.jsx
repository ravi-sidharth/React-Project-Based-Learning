import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:"",
       comments:"",
       topic:"react"
    }
    this.handleCommentChange = this.handleCommentChange.bind(this)
  } 
  handleUsernameChange=(event)=> {
    this.setState({
      username:event.target.value
    })
  }

  handleCommentChange(event) {
    this.setState({
      comments:event.target.value
    })
  }

  handleTopicChange =(event) => {
    this.setState({
      topic:event.target.value
    })
  }

  handleSubmitForm = event => {
    const {username, comments, topic} =this.state
    alert(`username: ${username}, comments: ${comments} and topic: ${topic}`)
    event.preventDefault()
  }
  
  render() {
    const {username, comments, topic} =this.state
    return (
     <form onSubmit={this.handleSubmitForm}>
         <div>
            <label>UserName </label>
            <input type='text' value ={username} onChange={this.handleUsernameChange}/>
        </div>

        <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.handleCommentChange}></textarea>
        </div>

        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange} >
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>

          <button type="submit" >Submit Form</button>
        </div>
     </form>
    )
  }
}

export default Form

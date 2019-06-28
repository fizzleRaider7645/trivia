import React, { Component } from 'react'

class CallAFriendFrom extends Component {
  constructor() {
    super()
    this.state = {
        question: "",
        name: "",
        number: ""
    }
  }

  handleNameChange = (event) => {
      this.setState({
          name: event.target.value
      })
  }

  handleNumberChange = (event) => {
    this.setState({
        number: event.target.value
    })
}

   handleSubmit = (event) => {
    event.preventDefault()
    fetch('/', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({number: this.state.number})
    })
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
   }


  render() {


    return (
    <form onSubmit={this.handleSubmit}>
        <label>Enter Name: </label>
        <input onChange={this.handleNameChange} type="text" value={this.state.name}></input><br />
        <label>Enter Number: </label>
        <input onChange={this.handleNumberChange} type="text" value={this.state.number}></input><br />
        <button>Send</button>
      </form>
      );
    }
  }

export default CallAFriendFrom
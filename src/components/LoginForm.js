import React, { Component } from 'react';
// Child of App Component
class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      contestant: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.contestant === "" ) {
      alert('Enter Name to Play!')
      return
    } else {
      this.props.initiateGame(this.state)
    }

  }

  handleChange = (event) => {
    this.setState({
        contestant: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div id="name-input">
          <h1>You Wanna Win 5 Bucks?</h1><br />
          <label>Enter Name:</label>
          <input type="text" onChange={this.handleChange}></input>
            <button>Play</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
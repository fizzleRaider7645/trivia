import React, { Component } from 'react';

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      contestant: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.initiateGame(this.state)

  }

  handleChange = (event) => {
    this.setState({
        contestant: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input id="name-input" type="text" onChange={this.handleChange}></input><br />
          <button>Submit</button>
      </form>
    );
  }
}

export default LoginForm;
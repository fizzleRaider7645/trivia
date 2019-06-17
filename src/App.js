import React, { Component } from 'react';
import LoginForm from './components/LoginForm'
import Arena from './components/Arena'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gameInProgress: false,
      contestant: ""
    }
  }

  initiateGame = (loginInfo) => {
    this.setState({
      contestant: loginInfo.contestant,
      gameInProgress: true
    })
  }

  render() {
    let loginForm;
    let arena;

    if(this.state.gameInProgress) {
      arena = <Arena contestant={this.state.contestant}/>
    } else {
      loginForm = <LoginForm initiateGame={this.initiateGame}/>
    }

    return (
      <React.Fragment>
        {loginForm}
        {arena}
      </React.Fragment>
    );
  }
}

export default App;

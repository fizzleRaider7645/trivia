import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import Arena from './components/Arena';
import Timer from './components/Timer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gameInProgress: false,
      contestant: "",
    }
  }

  initiateGame = (loginInfo) => {
    this.setState({
      contestant: loginInfo.contestant,
      gameInProgress: true
    })
  }

  gameOver = () => {
    alert('GAME OVER...')
    this.setState({
      gameInProgress: false,
      contestant: ""
    })
  }

  render() {
    let loginForm;
    let arena;

    if(this.state.gameInProgress) {
      arena = <Arena timer={<Timer gameOver={this.gameOver}/>} contestant={this.state.contestant} gameOver={this.gameOver}/>
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

import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import Arena from './components/Arena';
import VictoryScroll from './components/VictoryScroll'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gameInProgress: false,
      playerWon: false,
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

  playerWon = () => {
    this.setState({
      playerWon: true,
      gameInProgess: false
    })
  }

  gameInProgess = () => {
    this.setState({
      gameInProgess: false
    })
  }

  render() {
    let loginForm;
    let arena;
    let victoryScroll;

    if(this.state.gameInProgress) {
      arena = <Arena gameInProgess={this.gameInProgess} playerWon={this.playerWon} contestant={this.state.contestant} gameOver={this.gameOver}/>
    } else if(!this.state.gameInProgress && !this.state.playerWon) {
      loginForm = <LoginForm initiateGame={this.initiateGame}/>
    } else {
      victoryScroll = <VictoryScroll />
    }

    // if(this.state.gameInProgress) {
    //   arena = <Arena playerWon={this.playerWon} contestant={this.state.contestant} gameOver={this.gameOver}/>
    // } else {
    //   loginForm = <LoginForm initiateGame={this.initiateGame}/>
    // }

    return (
      <React.Fragment>
        {loginForm}
        {arena}
        {victoryScroll}
      </React.Fragment>
    );
  }
}

export default App;

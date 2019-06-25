import React, { Component } from 'react';
import One from '../components/Levels/One'
import Two from '../components/Levels/Two'
import Three from '../components/Levels/Three'
import Chat from './Chat'
import '../App.css'

class Arena extends Component {
  constructor() {
    super()
    this.state = {
      level: 1,
      contestantHasWon: false,
      earnings: 0,
      callAFriend: false
    }
  }

  advance = () => {
    alert(`ON TO LEVEL ${this.state.level + 1}!`)
    this.setState({
      level: this.state.level + 1
    })
  }

  contestantHasWon = () => {
    this.setState({
      contestantHasWon: true
    })
    alert("WINNER")
    this.props.gameOver()
  }

  lifeLineClick = () => {
    this.setState({
      callAFriend: true
    })
  }


  render() {
      let level;
      let chat;

      if(this.state.level === 1) {
        level = <One advance={this.advance} gameOver={this.props.gameOver}/>
      } else if(this.state.level === 2) {
        level = <Two advance={this.advance} gameOver={this.props.gameOver}/>
      } else {
        level = <Three questions={this.props.currentQuestionSet} gameOver={this.props.gameOver} contestantHasWon={this.contestantHasWon}/>
      }

      if(this.state.callAFriend) {
        chat = <Chat />
      }

    return (
      <div id="arena">
          <h1>Who Wants to Win 5 Bucks?!</h1>
          {level}
          {chat}
          <button id="life-line-btn" onClick={this.lifeLineClick}>Call A Friend</button>
      </div>
    );
  }
}

export default Arena
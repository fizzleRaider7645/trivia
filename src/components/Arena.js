import React, { Component } from 'react';
import One from '../components/Levels/One'
import Two from '../components/Levels/Two'
import Three from '../components/Levels/Three'
// import Chat from './Chat'
import '../App.css'

class Arena extends Component {
  constructor() {
    super()
    this.state = {
      level: 1,
      contestantHasWon: false,
      earnings: 0,
      calledAFriend: false
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
      calledAFriend: true
    })
    window.open('https://who-wants-to-win-bucks-chat.herokuapp.com/')
  }


  render() {
      let level;
      let lifeLineButton;

      if(this.state.level === 1) {
        level = <One advance={this.advance} gameOver={this.props.gameOver}/>
      } else if(this.state.level === 2) {
        level = <Two advance={this.advance} gameOver={this.props.gameOver}/>
      } else {
        level = <Three questions={this.props.currentQuestionSet} gameOver={this.props.gameOver} contestantHasWon={this.contestantHasWon}/>
      }

      if(!this.state.calledAFriend) {
        lifeLineButton = <button id="life-line-btn" onClick={this.lifeLineClick}>Call A Friend</button>
      }

    return (
      <div id="arena">
        <div id="marquee-border">
          <h1>Who Wants to Win 5 Bucks?!</h1>
          </div>
          {level}
          {lifeLineButton}
          <div id="scoreboard">
            
          </div>
      </div>
    );
  }
}

export default Arena
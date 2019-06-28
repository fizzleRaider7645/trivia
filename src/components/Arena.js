import React, { Component } from 'react';
import One from '../components/Levels/One'
import Two from '../components/Levels/Two'
import Three from '../components/Levels/Three'
import SMSForm from './SMSForm';
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
    if(this.state.level === 3) {
      this.contestantHasWon()
    } else {
      alert(`ON TO LEVEL ${this.state.level + 1}!`)
      this.setState({
        level: this.state.level + 1
      })
    }
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
    // window.open('https://who-wants-to-win-bucks-chat.herokuapp.com/')
  }

  getEarnings = () => {
    this.setState({
      earnings: this.state.earnings + .33
    })
  }


  render() {
      let level;
      let lifeLineButton;
      let calledAFriend;

      if(this.state.level === 1) {
        level = <One getEarnings={this.getEarnings} advance={this.advance} gameOver={this.props.gameOver}/>
      } else if(this.state.level === 2) {
        level = <Two getEarnings={this.getEarnings} advance={this.advance} gameOver={this.props.gameOver}/>
      } else {
        level = <Three getEarnings={this.getEarnings} questions={this.props.currentQuestionSet} gameOver={this.props.gameOver} contestantHasWon={this.contestantHasWon}/>
      }

      if(!this.state.calledAFriend) {
        lifeLineButton = <button id="life-line-btn" onClick={this.lifeLineClick}>Call A Friend</button>
      } else {
        calledAFriend = <SMSForm contestant={this.props.contestant}/>
      }

    return (
      <div id="arena">
        <div id="marquee-border">
          <h1>Who Wants to Win 5 Bucks?!</h1>
          </div>
          {level}
          {calledAFriend}
          {lifeLineButton}
          <div id="scoreboard">
            <p>Player: {this.props.contestant}</p>
            <p>Level: {this.state.level}</p>
            <p>Earnings: ${this.state.earnings.toFixed(2)}</p>

          </div>
      </div>
    );
  }
}

export default Arena
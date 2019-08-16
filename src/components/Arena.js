import React, { Component } from 'react';
import SMSForm from './SMSForm';
import GameRound from './GameRound';
import { fetchEasyQuestions, fetchMediumQuestions, fetchHardQuestions } from '../actions/QuestionActions';
import Timer from './Timer'
import { connect } from 'react-redux';
import '../App.css';
import QuestionContainer from './QuestionContainer';
// child of App Component
class Arena extends Component {
  constructor() {
    super()
    this.state = {
      level: 1,
      questionsAsked: 0,
      contestantHasWon: false,
      earnings: 0,
      calledAFriend: false,
      textSent: false
    }
  }


  componentDidMount = () => {
    this.fetchCurrentQuestions()
  }

  // if questionsAsked count is 4 the user has won the level and this.advanced() is invoked.
  questionAsked = () => {
    if(this.state.questionsAsked === 4) { 
      this.setState({
        questionsAsked: 0
      })
      this.advance()
    } else {
      this.setState({
        questionsAsked: this.state.questionsAsked + 1
      })
    }
  }
  // fetches question set depending on the level/difficulty
  fetchCurrentQuestions = () => {
    if(this.state.level === 1 && !this.state.earnings) {
      this.props.fetchEasyQuestions()
    } else if(this.state.level === 1 && this.state.earnings) {
      this.props.fetchMediumQuestions()
    } else {
      this.props.fetchHardQuestions()
    }
  }
  // checks if user has won or advancing to the next level 
  advance = () => {
    if(this.state.level === 3) {
      this.contestantHasWon()
    } else {
      alert(`ON TO LEVEL ${this.state.level + 1}!`)
      this.setState({
        level: this.state.level + 1
      })
      this.fetchCurrentQuestions()
    }
  }
  // updates state when user has won/invokes this.props.playerWon() - passed down from App Component
  contestantHasWon = () => {
    this.setState({
      contestantHasWon: true
    })
    alert("WINNER")
    this.props.playerWon()
  }
  // passed to SMSForm
  lifeLineClick = () => {
    this.setState({
      calledAFriend: true
    })
  }

  // addings earnings to user upon correct answer
  getEarnings = () => {
    this.setState({
      earnings: this.state.earnings + .33
    })
  }
  // passed to SMSForm
  textSent = () => {
    this.setState({
      textSent: true
    })
  }

  render() {
      // let level;
      let lifeLineButton;
      let calledAFriend;
      let smsForm;
      let level = <GameRound questionsAsked={this.state.questionsAsked} questionAsked={this.questionAsked} currentLevel={this.state.level} getEarnings={this.getEarnings} advance={this.advance} gameOver={this.props.gameOver}/>
 
      if(this.state.calledAFriend && this.state.textSent) {
        lifeLineButton = <span id="life-line-used"></span>
      } else if(this.state.calledAFriend && !this.state.textSent) {
        smsForm = <SMSForm contestant={this.props.contestant} textSent={this.textSent}/>
        lifeLineButton = <span id="life-line-in-use"></span>
      } else {
        lifeLineButton = <button id="life-line-btn" onClick={this.lifeLineClick}>Call A Friend</button>
      }

    return (
      <div id="arena">
        <div id="marquee-border">
          <h1>Who Wants to Win 5 Bucks?!</h1>
          </div>
          {level}
          {calledAFriend}
          {lifeLineButton}
          {smsForm}
          <div id="scoreboard">
            <p id="timer">{<Timer gameOver={this.props.gameOver} questionsAsked={this.state.questionsAsked}/>}</p>
            <p>Player: {this.props.contestant}</p>
            <p>Level: {this.state.level}</p>
            <p>Earnings: ${this.state.earnings.toFixed(2)}</p>
          </div>
      </div>
    );
  }
}

export default connect(null, { fetchEasyQuestions, fetchMediumQuestions, fetchHardQuestions })(Arena)
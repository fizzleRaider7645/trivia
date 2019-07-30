import React, { Component } from 'react';
import One from '../components/Levels/One'
import Two from '../components/Levels/Two'
import Three from '../components/Levels/Three'
import SMSForm from './SMSForm';
import GameRound from './GameRound';
import { fetchEasyQuestions, fetchMediumQuestions, fetchHardQuestions } from '../actions/QuestionActions';
import { connect } from 'react-redux';
import '../App.css';

class Arena extends Component {
  constructor() {
    super()
    this.state = {
      level: 1,
      questionsAsked: 0,
      contestantHasWon: false,
      earnings: 0,
      FiftyFifty: false,
      calledAFriend: false,
      textSent: false
    }
  }

  componentDidMount = () => {
    this.fetchCurrentQuestions()
  }

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

  fetchCurrentQuestions = () => {
    debugger
    if(this.state.level === 1 && !this.state.earnings) {
      this.props.fetchEasyQuestions()
    } else if(this.state.level === 1 && this.state.earnings) {
      this.props.fetchMediumQuestions()
    } else {
      this.props.fetchHardQuestions()
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
      this.fetchCurrentQuestions()
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
  }

  getEarnings = () => {
    this.setState({
      earnings: this.state.earnings + .33
    })
  }

  textSent = () => {
    this.setState({
      textSent: true
    })
  }

  useFiftyFifty = () => {
    this.setState({
      FiftyFifty: true
    })
  }



  render() {
      let level;
      let lifeLineButton;
      let calledAFriend;
      let smsForm;

      // if(this.state.level === 1) {
        level = <GameRound questionsAsked={this.state.questionsAsked} questionAsked={this.questionAsked} currentLevel={this.state.level} getEarnings={this.getEarnings} advance={this.advance} gameOver={this.props.gameOver}/>
        // level = <One timer={<Timer />} useFiftyFifty={this.state.useFiftyFifty} getEarnings={this.getEarnings} advance={this.advance} gameOver={this.props.gameOver}/>
      // } else if(this.state.level === 2) {
        // level = <Two useFiftyFifty={this.state.useFiftyFifty} getEarnings={this.getEarnings} advance={this.advance} gameOver={this.props.gameOver}/>
      // } else {
        // level = <Three useFiftyFifty={this.state.useFiftyFifty} getEarnings={this.getEarnings} questions={this.props.currentQuestionSet} gameOver={this.props.gameOver} contestantHasWon={this.contestantHasWon}/>
      // }

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
            <p>Player: {this.props.contestant}</p>
            <p>Level: {this.state.level}</p>
            <p>Earnings: ${this.state.earnings.toFixed(2)}</p>
          </div>
      </div>
    );
  }
}

export default connect(null, { fetchEasyQuestions, fetchMediumQuestions, fetchHardQuestions })(Arena)
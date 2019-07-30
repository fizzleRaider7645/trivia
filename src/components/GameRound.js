import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchEasyQuestions, fetchMediumQuestions, fetchHardQuestions } from '../actions/QuestionActions';
import QuestionContainer from '../components/QuestionContainer'
 

class GameRound extends Component {
    constructor() {
        super()
        this.state = {
            // level: 0,
            questionsAsked: 0
        }
    }

    componentDidMount = () => {
        // let currentLevel = this.props.currentLevel
        // if(currentLevel === 1) {
            // this.props.fetchEasyQuestions()
        // } else if(currentLevel === 2) {
            // this.props.fetchMediumQuestions()
        // } else if (currentLevel === 3) {
            // this.props.fetchHardQuestions()
        // }
    }

    // questionAsked = () => {
    //     // if(this.state.questionsAsked === 1) {
    //     //   this.props.advance()
    //     // }
    //     this.setState({
    //       questionsAsked: this.state.questionsAsked + 1
    //     })
    //   }

    render() {
        let questions;
        let questionDisplay;
        if(this.props.currentQuestionSet.length > 0) {
            questions = this.props.currentQuestionSet.map( q =>  q )
            questionDisplay = <QuestionContainer getEarnings={this.props.getEarnings} gameOver={this.props.gameOver} questionAsked={this.props.questionAsked} questionsAsked={this.props.questionsAsked} advance={this.props.advance}/>
          }
        return (
            <ol>
                {questionDisplay}
            </ol>
        )
    }
}

const mapStatetoProps = (state) => {
    return ({
      currentQuestionSet: state.questions
    })
  }

export default connect(mapStatetoProps, null)(GameRound)
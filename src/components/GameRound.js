import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEasyQuestions, fetchMediumQuestions, fetchHardQuestions } from '../actions/QuestionActions';
import QuestionContainer from '../components/QuestionContainer'
 

class GameRound extends Component {
    constructor() {
        super()
        this.state = {
            level: 0,
            questionsAsked: 0
        }
    }

    componentDidMount = () => {
        if(this.state.level === 1) {
            this.props.fetchEasyQuestions()
        } else if(this.state.level === 2) {
            this.props.fetchMediumQuestions()
        } else {
            this.props.fetchHardQuestions()
        }
    }

    questionAsked = () => {
        if(this.state.questionsAsked === 4) {
          this.props.advance()
        }
        this.setState({
          questionsAsked: this.state.questionsAsked + 1
        })
      }

    render() {
        let questions;
        let questionDisplay;
        if(this.props.currentQuestionSet.length > 0) {
            questions = this.props.currentQuestionSet.map( q =>  q )
            questionDisplay = <QuestionContainer getEarnings={this.props.getEarnings} gameOver={this.props.gameOver} questionAsked={this.questionAsked} questionsAsked={this.state.questionsAsked} advance={this.props.advance}/>
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

export default connect(mapStatetoProps, { fetchEasyQuestions, fetchMediumQuestions, fetchHardQuestions })(GameRound)
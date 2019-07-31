import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionContainer from '../components/QuestionContainer'
 

class GameRound extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

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
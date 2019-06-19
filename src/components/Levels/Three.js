import React, { Component } from 'react'
import QuestionContainer from '../QuestionContainer'
import { connect } from 'react-redux'
import { fetchHardQuestions } from '../../actions/QuestionActions'

class Two extends Component {
  constructor() {
    super()
    this.state = {
      questionsAsked: 0
    }
  }

  componentDidMount = () => {
    this.props.fetchHardQuestions()
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
      questionDisplay = <QuestionContainer questionAsked={this.questionAsked} questionsAsked={this.state.questionsAsked} advance={this.props.advance}/>
    }

    return (
    <ol>
      Three
      {questionDisplay}
      </ol>
      );
    }
  }

  const mapStatetoProps = (state) => {
    return ({
      currentQuestionSet: state.questions
    })
  }

export default connect(mapStatetoProps, { fetchHardQuestions })(Two)
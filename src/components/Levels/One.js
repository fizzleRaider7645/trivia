import React, { Component } from 'react'
import QuestionContainer from '../QuestionContainer'
import { connect } from 'react-redux'
import { fetchEasyQuestions } from '../../actions/QuestionActions'

class One extends Component {
  constructor() {
    super()
    this.state = {
      questionsAsked: 0
    }
  }

  componentDidMount = () => {
    this.props.fetchEasyQuestions()
  }

  questionAsked = () => {
    this.setState({
      questionsAsked: this.state.questionsAsked + 1
    })
  }

  render() {
    let questions;
    let questionDisplay;

    if(this.props.currentQuestionSet.length > 0) {
      questions = this.props.currentQuestionSet.map( q =>  q )
      questionDisplay = <QuestionContainer questionsAsked={this.state.questionsAsked} advance={this.props.advance}/>
    }

    return (
    <ol>
      One
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

export default connect(mapStatetoProps, { fetchEasyQuestions })(One)
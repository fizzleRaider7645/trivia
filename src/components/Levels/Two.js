import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMediumQuestions } from '../../actions/QuestionActions'

class Two extends Component {
  constructor() {
    super()
    this.state = {
      correctAnswers: 0
    }
  }
  
  render() {
    const questions = this.props.questions.map( q => <li key={Math.random()}>{q.question}</li>)
    return (
    <ol>
      Two
      {questions}
      </ol>
      );
    }
  }

  const mapStatetoProps = (state) => {
    return ({
      currentQuestionSet: state.questions
    })
  }

export default connect(mapStatetoProps, { fetchMediumQuestions })(Two)
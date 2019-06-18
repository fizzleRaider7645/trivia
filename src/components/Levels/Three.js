import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHardQuestions } from '../../actions/QuestionActions'

class Three extends Component {
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
      Three
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

export default connect(mapStatetoProps, { fetchHardQuestions })(Three)
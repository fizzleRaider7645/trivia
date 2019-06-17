import React, { Component } from 'react'
import QuestionDisplay from '../QuestionDisplay'

class One extends Component {
  constructor() {
    super()
    this.state = {
      correctAnswers: 0
    }
  }

  render() {
    // const questions = this.props.questions.map( q => <li key={Math.random()}>{q.question}</li>)
    const questions = this.props.questions.map( q =>  q ) 
    return (
    <ol>
      One
      <QuestionDisplay question={questions[0]} />
      {/* {questions} */}
      </ol>
      );
    }
  }

export default One
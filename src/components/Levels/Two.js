import React, { Component } from 'react'
// import Questions from './Questions'

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

export default Two
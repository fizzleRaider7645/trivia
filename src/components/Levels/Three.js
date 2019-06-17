import React, { Component } from 'react'
// import Questions from './Questions'

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

export default Three
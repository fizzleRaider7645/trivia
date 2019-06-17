import React, { Component } from 'react'
import Questions from './Questions'

class One extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    const questions = this.props.questions.map( q => <li key={Math.random()}>{q.question}</li>)
    return (
    <ol>
      One
      {questions}
      </ol>
      );
    }
  }

export default One
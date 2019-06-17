import React, { Component } from 'react'
// import Questions from './Questions'

class QuestionDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
        correct: null
    }
  }

  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }
  
  render() {
      let question;
      let answerBank;
      let correctAnswer;
      if(this.props.question) {
        question = this.props.question.question
        answerBank = this.props.question.incorrect_answers
        correctAnswer = this.props.question.correct_answer
        answerBank.push(correctAnswer)
        this.shuffle(answerBank)
      }
      console.log(correctAnswer)
      console.log(answerBank)
    return (
    <div>
    {question}
    </div>
      );
    }
  }

export default QuestionDisplay
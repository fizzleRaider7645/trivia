import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        guessing: false,
        contestantAnswer: ""
    }
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
  }

  handleChange = (event) => {
    this.setState({
      contestantAnswer: event.target.value
    })

    if(this.state.guessing === false) {
      this.setState({
        guessing: true
      })
    }
  }

  handleClick = () => {
    const questionObj = this.props.currentQuestionSet[this.props.questionsAsked]
    const correctAnswer = questionObj.correct_answer.toLowerCase()
    const contestantAnswer = this.state.contestantAnswer.toLowerCase()
    if(correctAnswer === contestantAnswer) {
      alert("CORRECT!")
      this.props.questionAsked()
      this.props.getEarnings()
      this.setState({
        guessing: false
      })
    } else if(contestantAnswer === "") {
      alert("Must Submit an Answer!")
      return
    } else {
      alert("THAT IS INCORRECT!")
      this.props.gameOver()
    }
    this.setState({
      contestantAnswer: ""
    })
  }
  
  render() {
    let questionObj = this.props.currentQuestionSet[this.props.questionsAsked]
    let answerBank = questionObj.incorrect_answers
    // }
    // let questionObj = this.props.currentQuestionSet[this.props.questionsAsked]
    // let answerBank = questionObj.incorrect_answers
    if(this.state.guessing === false) {
          answerBank.push(questionObj.correct_answer)
          this.shuffle(answerBank)
    }
        
        answerBank = answerBank.map( question => <li key={Math.random()}>{question}</li>)
      return (
      <div>
        <h2 id="add-font">{questionObj.question}</h2>
        {answerBank}<br />
        <input value={this.state.contestantAnswer} onChange={this.handleChange} placeholder="Copy/Paste Answer..."></input><br />
        <p><button onClick={this.handleClick}>Final Answer!</button></p>
        </div>
      );
    }
  }

const mapStatetoProps = (state) => {
  return ({
    currentQuestionSet: state.questions
  })
}

export default connect(mapStatetoProps, null)(QuestionContainer)
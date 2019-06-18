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

  componentDidMount=()=>{
    console.log(this.props.currentQuestionSet)
  }

  handleClick = () => {
    const correctAnswer = this.props.question.correct_answer.toLowerCase()
    const contestantAnswer = this.state.contestantAnswer.toLowerCase()
    if(correctAnswer === contestantAnswer) {
      this.props.questionsAsked()
      alert("CORRECT!")
      this.setState({
        guessing: false
      })
    } else if(contestantAnswer === "") {
      alert("Must Submit an Answer!")
      return
    }
    this.setState({
      contestantAnswer: ""
    })
  }
  
  render() {
      // let answerBank = this.props.question.incorrect_answers;
      let answerBank = this.props.currentQuestionSet[this.props.questionsAsked]
      console.log(answerBank)
      // if(this.state.guessing === false) {
      //     answerBank.push(this.props.question.correct_answer)
      //     this.shuffle(answerBank)
      //   }
        
        // answerBank = answerBank.map( question => <li key={Math.random()}>{question}</li>)

      return (
      <div>
      {/* <h2>{this.props.question.question}</h2> */}
      {/* {answerBank}<br /> */}
      <input type="text" value={this.state.contestantAnswer} onChange={this.handleChange} placeholder="Answer"></input><br />
      <button onClick={this.handleClick}>Submit</button>
      </div>
      );
    }
  }

// export default QuestionContainer
const mapStatetoProps = (state) => {
  return ({
    currentQuestionSet: state.questions
  })
}

export default connect(mapStatetoProps, null)(QuestionContainer)
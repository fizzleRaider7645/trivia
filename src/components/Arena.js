import React, { Component } from 'react';
import One from '../components/Levels/One'
import Two from '../components/Levels/Two'
import Three from '../components/Levels/Three'
import { connect } from 'react-redux'
import { fetchEasyQuestions, fetchMediumQuestions, fetchHardQuestions } from '../actions/QuestionActions'

class Arena extends Component {
  constructor() {
    super()
    this.state = {
      level: 1
    }
  }

//   fetchEasy = () => {
//       fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
//       .then(res => res.json())
//     //   .then(res => this.setQuestions(res.results))
//     .then(res => this.setState({
//         easyQuestions: res.results
//     }))
//   }

//   fetchMedium = () => {
//     fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple')
//     .then(res => res.json())
//     // .then(res => this.setQuestions(res.results))
//     .then(res => this.setState({
//         mediumQuestions: res.results
//     }))
// }

// fetchHard = () => {
//     fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=hard&type=multiple')
//     .then(res => res.json())
//     // .then(res => this.setQuestions(res.results))
//     .then(res => this.setState({
//         hardQuestions: res.results
//     }))
// }

  componentDidMount = () => {
    this.props.fetchEasyQuestions()
  }

  advanceToLevelTwo = () => {
    this.setState = {
      level: 2
    }
  }

  advanceToLevelThree = () => {
    this.setState = {
      level: 3
    }
  }

  render() {
      let level;
      if(this.state.level === 1) {
        level = <One questions={this.props.currentQuestionSet} advanceToLevelTwo={this.advanceToLevelTwo}/>
      } else if(this.state.level === 2) {
        level = <Two questions={this.props.currentQuestionSet}/>
      } else {
        level = <Three questions={this.props.currentQuestionSet}/>
      }

      // const questions = this.props.currentQuestionSet.map( q => <li key={Math.random()}>{q.question}</li> )
    return (
      <div id="arena">
          <h1>Welcome, {this.props.contestant}!</h1>
          {level}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return ({
    currentQuestionSet: state.questions
  })
}

export default connect(mapStatetoProps, { fetchEasyQuestions, fetchMediumQuestions, fetchHardQuestions })(Arena);
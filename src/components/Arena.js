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

  componentDidMount = () => {
    this.props.fetchEasyQuestions()
  }

  advanceToLevelTwo = () => {
    this.setState({
      level: 2
    })
    this.props.fetchMediumQuestions()
  }

  advanceToLevelThree = () => {
    this.setState({
      level: 3
    })
    this.props.fetchHardQuestions()
  }

  render() {
      let level;
      if(this.state.level === 1) {
        level = <One questions={this.props.currentQuestionSet} advanceToLevelTwo={this.advanceToLevelTwo}/>
      } else if(this.state.level === 2) {
        level = <Two questions={this.props.currentQuestionSet} advanceToLevelThree={this.advanceToLevelThree}/>
      } else {
        level = <Three questions={this.props.currentQuestionSet}/>
      }

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
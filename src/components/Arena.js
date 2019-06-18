import React, { Component } from 'react';
import One from '../components/Levels/One'
import Two from '../components/Levels/Two'
import Three from '../components/Levels/Three'
// import { connect } from 'react-redux'
// import { fetchEasyQuestions, fetchMediumQuestions, fetchHardQuestions } from '../actions/QuestionActions'

class Arena extends Component {
  constructor() {
    super()
    this.state = {
      level: 1,
      levelWon: false
    }
  }

  advanceToLevelTwo = () => {
    this.setState({
      level: 2
    })
  }

  advanceToLevelThree = () => {
    this.setState({
      level: 3
    })
  }



  render() {
      let level;
      if(this.state.level === 1) {
        level = <One advance={this.advanceToLevelTwo}/>
      } else if(this.state.level === 2) {
        level = <Two questions={this.props.currentQuestionSet} advance={this.advanceToLevelThree}/>
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

// export default connect(mapStatetoProps, { fetchEasyQuestions, fetchMediumQuestions, fetchHardQuestions })(Arena);
export default Arena
import React, { Component } from 'react';
import One from '../components/Levels/One'
import Two from '../components/Levels/Two'
import Three from '../components/Levels/Three'

class Arena extends Component {
  constructor() {
    super()
    this.state = {
      level: 1,
      easyQuestions: [],
      mediumQuestions: [],
      hardQuestions: []
    }
  }

  fetchEasy = () => {
      fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then(res => res.json())
    //   .then(res => this.setQuestions(res.results))
    .then(res => this.setState({
        easyQuestions: res.results
    }))
  }

  fetchMedium = () => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple')
    .then(res => res.json())
    // .then(res => this.setQuestions(res.results))
    .then(res => this.setState({
        mediumQuestions: res.results
    }))
}

fetchHard = () => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=hard&type=multiple')
    .then(res => res.json())
    // .then(res => this.setQuestions(res.results))
    .then(res => this.setState({
        hardQuestions: res.results
    }))
}

  componentDidMount = () => {
    this.fetchEasy();
    this.fetchMedium();
    this.fetchHard();
  }

  render() {
      let level;
      if(this.state.level === 1) {
        level = <One questions={this.state.easyQuestions}/>
      } else if(this.state.level === 2) {
        level = <Two questions={this.state.mediumQuestions}/>
      } else {
        level = <Three questions={this.state.hardQuestions}/>
      }


    return (
      <div id="arena">
          <h1>{this.props.contestant}</h1>
          {level}
      </div>
    );
  }
}

export default Arena;
import React, { Component } from 'react';
import One from '../components/Levels/One'
import Two from '../components/Levels/Two'
import Three from '../components/Levels/Three'
import '../App.css'

class Arena extends Component {
  constructor() {
    super()
    this.state = {
      level: 1,
      contestantHasWon: false,
      earnings: 0
    }
  }

  advance = () => {
    alert(`ON TO LEVEL ${this.state.level + 1}!`)
    this.setState({
      level: this.state.level + 1
    })
  }

  contestantHasWon = () => {
    this.setState({
      contestantHasWon: true
    })
    alert("WINNER")
    this.props.gameOver()
  }


  render() {
      let level;
      if(this.state.level === 1) {
        level = <One advance={this.advance} gameOver={this.props.gameOver}/>
      } else if(this.state.level === 2) {
        level = <Two advance={this.advance} gameOver={this.props.gameOver}/>
      } else {
        level = <Three questions={this.props.currentQuestionSet} gameOver={this.props.gameOver} contestantHasWon={this.contestantHasWon}/>
      }

    return (
      <div id="arena">
          <h1 id="contestant-name" className="center-content">Welcome, {this.props.contestant}!</h1>
          {level}
      </div>
    );
  }
}

export default Arena
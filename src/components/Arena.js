import React, { Component } from 'react';
import One from '../components/Levels/One'
import Two from '../components/Levels/Two'
import Three from '../components/Levels/Three'

class Arena extends Component {
  constructor() {
    super()
    this.state = {
      level: 1
    }
  }

  advance = () => {
    this.setState({
      level: this.state.level + 1
    })
  }


  render() {
      let level;
      if(this.state.level === 1) {
        level = <One advance={this.advance} />
      } else if(this.state.level === 2) {
        level = <Two advance={this.advance}/>
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

export default Arena
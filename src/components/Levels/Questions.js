import React, { Component } from 'react';
import AskQuestion from '../AskQuestion';

class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
        questions: this.props
    }
  }

  render() {
    //   let questions;
    //   if(this.props.questions.length === 5) {
    //     questions = this.props.questions.map( questionObj => <div key={Math.random()}><AskQuestion question={questionObj}/></div>)
    //   }
    return (
        <div>

        </div>
    );
  }
}

export default Questions;
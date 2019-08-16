import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionContainer from '../components/QuestionContainer'
 
// Child of Arena Component
/* assigns questionDisplay(below) when the props are available
  Can be refactored/and handled by QuestionContainer
*/
class GameRound extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        let questionDisplay;
        if(this.props.currentQuestionSet.length > 0) {
            questionDisplay = <QuestionContainer getEarnings={this.props.getEarnings} gameOver={this.props.gameOver} questionAsked={this.props.questionAsked} questionsAsked={this.props.questionsAsked} advance={this.props.advance}/>
          }
        return (
            <ol>
                {questionDisplay}
            </ol>
        )
    }
}
// grabbing question set from redux store to check props
const mapStatetoProps = (state) => {
    return ({
      currentQuestionSet: state.questions
    })
  }

export default connect(mapStatetoProps, null)(GameRound)
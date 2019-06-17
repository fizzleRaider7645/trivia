import React, { Component } from 'react'

class AskQuestion extends Component {
    constructor(props) {
        super(props)
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    render() {
        let answerBank = []
        const answer = this.props.question.correct_answer
        answerBank = answerBank.concat(this.props.question.incorrect_answers)
        if(answerBank.length === 3) {
            answerBank.push(answer)
            this.shuffle(answerBank)
            answerBank = answerBank.map( answer => <p key={Math.random()}>{answer}</p>)
        }
        return (
            <div>
                Correct: {answer}<br/ >
                Answers: {answerBank}
            </div>
        )
    }
}

export default AskQuestion
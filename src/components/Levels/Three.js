import React from 'react'
import Questions from './Questions'

function Three(props) {
  const questions = props.questions.map( q => <li key={Math.random()}>{q.question}</li>)
    return (
      <div>
          Three
          {questions}
      </div>
    );
  }

export default Three
import React from 'react'
import Questions from './Questions'

function Two(props) {
  const questions = props.questions.map( q => <li key={Math.random()}>{q.question}</li>)
    return (
      <div>
          Two
          {questions}
      </div>
    );
  }

export default Two
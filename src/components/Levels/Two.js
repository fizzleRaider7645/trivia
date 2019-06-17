import React from 'react'
import Questions from './Questions'

function Two(props) {
    return (
      <div>
          Two
          <Questions questions={props.questions}/>
      </div>
    );
  }

export default Two
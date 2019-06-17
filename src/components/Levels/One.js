import React from 'react'
import Questions from './Questions'

function One(props) {
    return (
      <div>
          One
          <Questions questions={props.questions}/>
      </div>
    );
  }

export default One
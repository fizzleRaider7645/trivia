import React from 'react'
import Questions from './Questions'

function Three(props) {
    return (
      <div>
          Three
          <Questions questions={props.questions}/>
      </div>
    );
  }

export default Three
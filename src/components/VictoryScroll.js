import React, { Component } from 'react'


class VictoryScroll extends Component {
  timer = null
  constructor() {
    super()
    this.state = {
      resetCount: 7
    }
  }

  countDown = () => {
    this.timer = setInterval(() => {
            this.setState({
              resetCount: this.state.resetCount - 1
            })
    }, 1000)
}

componentDidMount() {
  this.countDown()
}

componentWillUnmount() {
  clearInterval(this.timer)
}

componentDidUpdate() {
  if(this.state.resetCount < 0) {
    this.props.gameOver()
  }
}

  
  render() {
      return (
      <div id="victory-scroll">
          <h2>Congratulations, You've Won $5.00!!!</h2>
          <p>It may not be a million,</p>
          <p>but the memories will last a lifetime!</p>
        </div>
      );
    }
  }

export default VictoryScroll
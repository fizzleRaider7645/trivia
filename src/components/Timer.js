import React, { Component } from 'react';
import equal from 'fast-deep-equal';

class Timer extends Component {
    timer = null
    constructor() {
        super()
        this.state = {
            count: 60
        }
    }

    resetTimer = () => {
        this.setState({
            count: 60
        })
    }


    countDown = () => {
        this.timer = setInterval(() => {
                this.setState({
                    count: this.state.count - 1
                })
        }, 1000)
    }

    componentDidMount() {
        this.countDown()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
     }

    componentDidUpdate(prevProps) {
        if(this.state.count < 0) {
            this.props.gameOver()
        } else if(!equal(this.props.questionsAsked, prevProps.questionsAsked)) {
            this.resetTimer()
        }
    }



    render() {
        return (
            <React.Fragment>
                {this.state.count}
            </React.Fragment>
        )
    }
}

export default Timer;
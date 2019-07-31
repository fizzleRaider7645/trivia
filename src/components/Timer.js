import React, { Component } from 'react';
import equal from 'fast-deep-equal';

class Timer extends Component {
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
        setInterval(() => {
            if(this.state.count > 0) {
                this.setState({
                    count: this.state.count - 1
                })
            } else {
                this.setState({
                    count: 60
                })
                this.resetTimer()
                this.props.gameOver()
            }
        }, 1000)
    }

    componentDidMount() {
        this.countDown()
    }

    componentDidUpdate(prevProps) {
        if(!equal(this.props.questionsAsked, prevProps.questionsAsked)) {
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
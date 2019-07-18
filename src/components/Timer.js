import React, { Component } from 'react';

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            count: 60
        }
    }


    countDown = () => {
        setTimeout(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 3000)
    }

    componentDidMount = () => {
        this.countDown()
    }  


    render() {
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}

export default Timer;
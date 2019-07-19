import React, { Component } from 'react';

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            count: 5
        }
    }


    countDown = () => {
        setInterval(() => {
            if(this.state.count > 0) {
                this.setState({
                    count: this.state.count - 1
                })
            } else {
                this.setState({
                    count: 5
                })
                this.props.gameOver()
            }
        }, 1000)
    }

    componentDidMount() {
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
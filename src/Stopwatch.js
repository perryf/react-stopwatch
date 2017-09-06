import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      interval: null
    }
  }

  startTimer() {
    if (!this.state.interval) {
      this.setState({ interval: setInterval(() => {
        this.setState({
          counter: this.state.counter + 1
        })
      }, 1000)})
    }
  }

  pauseTimer() {
    clearInterval(this.state.interval)
    this.setState({
      interval: null
    })
  }

  resetTimer() {
    this.setState({
      counter: 0
    })
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button onClick={() => this.resetTimer()}>Reset</button>
          <button onClick={() => this.startTimer()}>Start</button>
          <button onClick={() => this.pauseTimer()}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;

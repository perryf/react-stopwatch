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

  startTimer(e) {
    if (!this.state.interval) {
      this.setState({ interval: setInterval(() => {
        this.setState({
          counter: this.state.counter + 1
        })
      }, 1000)})
    }
  }

  pauseTimer(e) {
    clearInterval(this.state.interval)
    this.setState({
      interval: null
    })
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button>Reset</button>
          <button onClick={(e) => this.startTimer(e)}>Start</button>
          <button onClick={(e) => this.pauseTimer(e)}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;

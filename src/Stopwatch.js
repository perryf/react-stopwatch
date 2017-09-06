import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  startTimer(e) {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button>Reset</button>
          <button onClick={(e) => this.startTimer(e)}>Start</button>
          <button>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;

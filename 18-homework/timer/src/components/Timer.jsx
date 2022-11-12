import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 5,
      autostart: false,
      progressBar: 400,
      interval: this.interval,
    };
  }
  componentDidMount() {
    const { autostart } = this.state;
    if (autostart) {
      this.timerOn();
    }
  }

  autostartSwitch = () => {
    this.setState({
      autostart: !this.state.autostart,
    });
    // console.log(this.state.autostart);
  };

  timerOn = () => {
    this.interval = setInterval(() => {
      const { step, progressBar } = this.state;
      this.setState({
        step: step - 1,
        progressBar: progressBar - progressBar / step,
      });
      document.querySelector(".progress").style.width = `${
        progressBar - progressBar / step
      }px `;
    }, 1000);
  };

  componentDidUpdate() {
    if (this.state.step === 0) {
      // console.log(this.state.step);
      clearInterval(this.interval);
    }
  }

  render() {
    let { step } = this.state;
    return (
      <div className="wrapper">
        <div className="container">
          <label htmlFor="autostart">
            autostart
            <input
              type="checkbox"
              defaultChecked={this.state.autostart}
              id="autostart"
              onChange={this.autostartSwitch}
            />
          </label>

          <div className="timer">
            {step
              ? (step - (step %= 60)) / 60 + (9 < step ? ":" : ":0") + step
              : "0.00"}
          </div>

          <div className="progress__container">
            <div className="progress"></div>
          </div>

          <button className="btn__timer" onClick={this.timerOn}>
            start/pause
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;

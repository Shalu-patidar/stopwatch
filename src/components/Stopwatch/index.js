// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimingRunning: false,
    timeIncreaseInSecond: 0,
  }

  componentWillUnmount = () => {
    clearInterval(this.timeInterval)
  }

  onReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimingRunning: false, timeIncreaseInSecond: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimingRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeIncreaseInSecond: prevState.timeIncreaseInSecond + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimingRunning: true})
  }

  renderSecondes = () => {
    const {timeIncreaseInSecond} = this.state
    const second = Math.floor(timeIncreaseInSecond % 60)
    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  renderMinutes = () => {
    const {timeIncreaseInSecond} = this.state
    const minutes = Math.floor(timeIncreaseInSecond / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimingRunning} = this.state
    const time = `${this.renderMinutes()}: ${this.renderSecondes()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <p>Timer</p>
            </div>
            <h1 className="main-heading">{time}</h1>
            <div className="timer-button">
              <button
                type="button"
                className="button start-button"
                onClick={this.onStartTimer}
                disabled={isTimingRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop-button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset-button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch

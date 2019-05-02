import React, { Component } from 'react'
import CountdownComponent from 'react-countdown-now'
import StyledWrapperCountdown from './styles'

class Countdown extends Component {
  customRender = props => (
    <StyledWrapperCountdown>
      <h2>
        {props.days}
        <span>.</span>
        {props.hours}
        <span>.</span>
        {props.minutes}
        <span>.</span>
        {props.seconds}
      </h2>
    </StyledWrapperCountdown>
  )

  render() {
    return (
      <CountdownComponent
        date="July 27, 2019 17:00:00"
        renderer={this.customRender}
      />
    )
  }
}

export default Countdown

import React, { Component, Fragment } from 'react'
import CountdownComponent from 'react-countdown-now'

class Countdown extends Component {
  customRender = props => (
      <Fragment>
        <h5>Dias: {props.days}</h5>
        <h5>Horas: {props.hours}</h5>
        <h5>Minutos: {props.minutes}</h5>
        <h5>Segundos: {props.seconds}</h5>
      </Fragment>
  )

  render() {
    return (
      <Fragment>
        <h2>Contador de Tempo</h2>
        <CountdownComponent date="June 27, 2019 17:00:00" renderer={this.customRender} />
      </Fragment>
    )
  }
}

export default Countdown

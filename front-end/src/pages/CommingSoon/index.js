import React, { Component } from 'react'

import CountdownComponent from 'react-countdown-now'
import { Main } from './styles'

class CommingSoon extends Component {
  customRender = props => (
    <div class="countDown">
      <h2>
        <span class="spacer">{props.days}</span>
        <span class="dot">.</span>
        <span class="spacer">{props.hours}</span>
        <span class="dot">.</span>
        <span class="spacer">{props.minutes}</span>
        <span class="dot">.</span>
        <span class="spacer">{props.seconds}</span>
      </h2>
    </div>
  )

  render() {
    return (
      <Main>
        <div class="centerElement">
          <img
            src="/assets/images/rulianaediogo-comming-soon.svg"
            alt="Logotipo Ruliana e Diogo"
          />
          <CountdownComponent
            className="countDown"
            date="June 27, 2019 17:00:00"
            renderer={this.customRender}
          />
        </div>
      </Main>
    )
  }
}

export default CommingSoon

import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import Title from '../../../objects/Title'
import Button from '../../../objects/Button'

class StepStart extends Component {
  nextStep = () => {
    this.props.changeStep(this.props.step + 1)
    this.props.history.push(this.props.nextPath)
  }

  componentDidMount() {
    if (this.props.step !== this.props.currentStep) this.props.history.push('/home')
  }

  render() {
    return (
      <Fragment>
        <Title>{this.props.title}</Title>
        <Button
          onClick={() => {
            this.nextStep()
          }}
        >
          {this.props.buttonNext}
        </Button>
      </Fragment>
    )
  }
}

export default withRouter(StepStart)

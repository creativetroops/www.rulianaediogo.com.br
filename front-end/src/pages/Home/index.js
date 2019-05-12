import React, { Component, Fragment } from 'react'

import Header from '../../components/Header'
import Red from '../../components/Red'
import Separator from '../../objects/Separator'
import Gift from '../../components/Gift'
import Rsvp from '../../components/Rsvp'
import Message from '../../components/Message'
import Infos from '../../components/Infos'
import {
  ModalGiftBillet,
  ModalGiftDeposit,
  ModalRsvp,
  ModalMessage,
  ModalHistory,
  ModalAccommodation,
  ModalBeautySalon,
} from '../../components/Modals'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <ModalGiftBillet />
        <ModalGiftDeposit />
        <ModalRsvp />
        <ModalMessage />
        <ModalHistory />
        <ModalAccommodation />
        <ModalBeautySalon />
        <Header />
        <Red />
        <Separator src="/assets/images/red-separator-1.jpg" />
        <Gift />
        <Rsvp />
        <Separator src="/assets/images/red-separator-2.jpg" />
        <Message />
        <Infos />
      </Fragment>
    )
  }
}

export default Home

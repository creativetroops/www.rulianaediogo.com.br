import React, { Component, Fragment } from 'react'

import Gift      from '../../components/Gift'
import Instagram from "../../components/Instagram"
import Countdown from '../../components/Countdown'
import Rsvp      from '../../components/Rsvp'
import Contact   from '../../components/Contact'

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Gift />
				<Instagram />
				<Contact />
				<Countdown />
				<Rsvp />
			</Fragment>
		)
	}
}

export default Home
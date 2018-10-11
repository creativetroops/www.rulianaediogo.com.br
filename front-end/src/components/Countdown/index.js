import React, { Component, Fragment } from 'react'
import CountdownComponent from "react-countdown-now";

class Countdown extends Component {
	customRender = (props) => {
		return(
			<Fragment>
				<h1>Dias: {props.days}</h1>
				<h1>Horas: {props.hours}</h1>
				<h1>Minutos: {props.minutes}</h1>
				<h1>Segundos: {props.seconds}</h1>
			</Fragment>
		)
	}
	render() {
		return (
			<Fragment>
				<div className="container">
					<h5 className="grey-text text-darken-3">Contador</h5>
					<CountdownComponent date="June 27, 2019 17:00:00" renderer={this.customRender} />
				</div>
			</Fragment>
		);
	}
}

export default Countdown
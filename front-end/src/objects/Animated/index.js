import { AnimatedSwitch } from 'react-router-transition'
import React              from 'react'

const Animated = (props) => {
	return (
		<AnimatedSwitch
			atEnter={props.atEnter   || { opacity: 0 }}
			atLeave={props.atLeave   || { opacity: 1 }}
			atActive={props.atActive || { opacity: 1 }}
			className={props.className || "switch-wrapper"}
		>
			{props.children}
		</AnimatedSwitch>
	);
};

export default Animated
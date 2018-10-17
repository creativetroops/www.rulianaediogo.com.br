import React                   from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled                  from 'styled-components'

const FieldMessage = (props) => {
	return (
		<ReactCSSTransitionGroupStyled
			transitionName = {props.transitionName || 'default'}
			transitionEnterTimeout = {props.EnterTimeout || 700}
			transitionLeaveTimeout = {props.LeaveTImeout || 700}>
			{props.error && props.touched &&
				<div className="error-message">
					{props.message}
				</div>
			}
		</ReactCSSTransitionGroupStyled>
	)
}

const ReactCSSTransitionGroupStyled = styled(ReactCSSTransitionGroup)`
	.default-enter {
		opacity: 0.01;
	}
	.default-enter.default-enter-active {
		opacity: 1;
		transition: 700ms;
	}
	.default-leave {
		opacity: 1;
	}
	.default-leave.default-leave-active {
		opacity: 0.01;
		transition: 700ms;
	}
	.error-message {
		color: red;
	}
`

export default FieldMessage
import { createGlobalStyle } from 'styled-components'

const Generic = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: none;
	}
	html,
	body {
		height: 100%;
	}
	input {
		font-size: inherit;
		font-family: inherit;
		color: inherit;
	}
	input:focus {
		outline: none;
	}
`

export default Generic

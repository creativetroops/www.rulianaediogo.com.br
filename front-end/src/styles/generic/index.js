import { createGlobalStyle } from 'styled-components'

const Generic = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    outline: 0!important;
    box-sizing: border-box!important;
	}
	html,
	body {
		height: 100%;
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
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

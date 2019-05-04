import { createGlobalStyle } from 'styled-components'

const Generic = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    outline: 0!important;
    box-sizing: border-box!important;
	}
  ::selection {
    background-color: var(--color-green)!important;
    color: var(--color-white)!important;
  }
  :root{
    font-size: 14px!important;
    height: 100%;
  }
	body{
    font-family: 'Montserrat', sans-serif;
    background-color: var(--color-gray);
    height: 100%;
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
    overflow-x: hidden;
	}
`

export default Generic

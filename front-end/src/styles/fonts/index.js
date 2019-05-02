import { createGlobalStyle } from 'styled-components'

const Fonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  @font-face {
    font-family: 'Niagara';
    src: url('/assets/fonts/NiagaraSolid-Reg.eot?#iefix') format('embedded-opentype'),
    url('/assets/fonts/NiagaraSolid-Reg.woff') format('woff'),
    url('/assets/fonts/NiagaraSolid-Reg.ttf') format('truetype'),
    url('/assets/fonts/NiagaraSolid-Reg.svg#NiagaraSolid-Reg') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Champignon';
    src: url('/assets/fonts/Champignon.eot?#iefix') format('embedded-opentype'),
    url('/assets/fonts/Champignon.otf') format('opentype'),
    url('/assets/fonts/Champignon.woff') format('woff'),
    url('/assets/fonts/Champignon.ttf')  format('truetype'),
    url('/assets/fonts/Champignon.svg#Champignon') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`

export default Fonts

import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledLogo = styled.img`
  max-width: 611px;
  max-height: 635px;
  width: 100%;
  @media ${devices.laptop} {
    max-width: 400px;
  }
  @media ${devices.mobileLarge} {
    max-width: 80%;
  }
`

export default StyledLogo

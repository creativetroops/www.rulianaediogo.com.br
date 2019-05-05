import styled from 'styled-components'
import { devices } from '../../../styles/devices'

const StyledContentRsvp = styled.div`
  @media ${devices.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    .closeButton {
      display: none;
    }
  }
`

export default StyledContentRsvp

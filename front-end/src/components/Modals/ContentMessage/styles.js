import styled from 'styled-components'
import { devices } from '../../../styles/devices'

const StyledContentMessage = styled.div`
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

export default StyledContentMessage

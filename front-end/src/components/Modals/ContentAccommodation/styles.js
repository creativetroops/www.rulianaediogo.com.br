import styled from 'styled-components'
import { devices } from '../../../styles/devices'

const StyledContentAccommodation = styled.div`
  a,
  strong {
    color: var(--color-green) !important;
  }
  p {
    @media ${devices.tablet} {
      font-size: 0.8rem !important;
      margin-top: 0 !important;
      margin-bottom: 10px !important;
      line-height: 1.8rem;
    }
    @media ${devices.mobileSmall} {
      font-size: 0.6rem !important;
      margin-top: 0 !important;
      margin-bottom: 10px !important;
      line-height: 1.2rem;
    }
  }
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

export default StyledContentAccommodation

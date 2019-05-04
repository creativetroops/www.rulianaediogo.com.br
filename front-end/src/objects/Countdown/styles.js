import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledWrapperCountdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: 'Niagara';
    font-size: 7rem;
    margin-top: 5rem;
    color: var(--color-white);
    text-align: center;
    span {
      color: var(--color-green);
      margin: 0 10px;
    }
    @media ${devices.laptop} {
      font-size: 5rem;
    }
    @media ${devices.mobileLarge} {
      font-size: 3rem;
    }
  }
`

export default StyledWrapperCountdown

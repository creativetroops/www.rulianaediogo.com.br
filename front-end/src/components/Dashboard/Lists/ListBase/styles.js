import styled from 'styled-components'
import { devices } from '../../../../styles/devices'

const StyledListBase = styled.div`
  width: 100%;
  .listbase-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 10%;
    margin-top: 40px;
    margin-bottom: 40px;
    @media ${devices.mobileLarge} {
      padding: 0 15px;
    }
  }
`

export default StyledListBase

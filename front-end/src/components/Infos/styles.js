import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledInfos = styled.div`
  .icons {
    padding: 0 15px;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    width: 100%;
    @media ${devices.laptop} {
      flex-wrap: wrap;
    }
  }
`

export default StyledInfos

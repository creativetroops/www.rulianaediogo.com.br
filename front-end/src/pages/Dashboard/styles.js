import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledDashboard = styled.div`
  min-height: 100vh;
  div {
    position: relative;
    float: left;
    width: 100%;
  }
  .dashboard-options {
    margin-top: 60px;
    padding: 0 10%;
    .dashboard-options-items {
      padding: 0 15px;
      display: flex;
      justify-content: space-around;
      flex-wrap: nowrap;
      width: 100%;
      @media ${devices.laptop} {
        flex-wrap: wrap;
      }
    }
  }
  .dashboard-internal {
    margin-top: 60px;
  }
  button {
    margin-top: 30px;
  }
`

export default StyledDashboard

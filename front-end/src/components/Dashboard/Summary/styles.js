import styled from 'styled-components'
import { devices } from '../../../styles/devices'

const StyledSummary = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 10%;
  .summary-box {
    flex: 1 0 21%;
    margin: 5px;
    padding: 20px 10px;
    background-color: var(--color-green);
    transition: all 0.25s ease-in !important;
    cursor: pointer;
    &:hover {
      background-color: var(--color-white);
    }
    @media ${devices.laptop} {
      flex: 1 0 33%;
    }
    .summary-icon {
      height: 70px;
      width: 70px;
      margin-bottom: 10px;
      @media ${devices.laptop} {
        height: 50px;
        width: 50px;
      }
    }
    .summary-title {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 0.7rem;
      margin-bottom: 0;
      color: var(--color-gray);
    }
    .summary-number {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 2.5rem;
      margin-bottom: 0;
      line-height: 40px;
      color: var(--color-gray-dark);
      font-family: 'Niagara';
      @media ${devices.laptop} {
        line-height: 30px;
        font-size: 1.9rem;
      }
    }
  }
`

export default StyledSummary

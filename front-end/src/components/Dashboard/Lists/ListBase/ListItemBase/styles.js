import styled from 'styled-components'
import { devices } from '../../../../../styles/devices'

const StyledListItemBase = styled.div`
  flex: 1 0 calc(50% - 10px);
  background-color: var(--color-white);
  margin: 5px;
  padding: 20px 10px;
  transition: all 0.25s ease-in !important;
  cursor: pointer;
  @media ${devices.mobileLarge} {
    flex: 1 0 calc(100% - 30px);
  }
  &:hover {
    background-color: var(--color-green);
  }
  .listitembase-container {
    width: 100%;
    h2 {
      text-transform: uppercase;
      margin: 0;
      font-family: 'Niagara';
      font-size: 3rem;
      line-height: 50px;
      color: var(--color-gray);
      @media ${devices.laptop} {
        font-size: 2rem;
      }
    }
    p {
      font-size: 0.8rem;
      margin: 0;
    }
    .listitembase-email {
      text-transform: lowercase;
      a {
        text-decoration: none;
        color: var(--color-green-dark) !important;
      }
    }
    .listitembase-phone {
      margin-bottom: 15px;
      font-size: 0.7rem;
      color: var(--color-green-dark) !important;
    }
    .listitembase-message {
      margin-bottom: 10px;
      font-size: 0.9rem;
    }
    .listitembase-value {
      font-family: 'Niagara';
      font-size: 3rem;
      margin-bottom: 10px;
      @media ${devices.laptop} {
        font-size: 1.6rem;
      }
    }
    .listitembase-time {
      font-size: 0.7rem;
    }
  }
`

export default StyledListItemBase

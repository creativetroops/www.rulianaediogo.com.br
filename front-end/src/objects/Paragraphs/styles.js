import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledParagraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  color: ${({ color }) => `var(--color-${color || 'white'})`};
  margin-bottom: 0;
  line-height: 1.2rem;
  text-align: center;
  margin-top: 30px;
  margin-bottom: ${({ bottom }) => bottom || '45px'};
  padding: 0 15%;
  line-height: 2rem;
  span {
    color: var(--color-green);
  }
  @media ${devices.laptop} {
    font-size: 1rem;
    padding: 0 15px !important;
  }
  @media ${devices.mobileLarge} {
    font-size: 0.9rem;
  }
`

const StyledParagraphMain = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  color: ${({ color }) => `var(--color-${color || 'green'})`};
  text-transform: uppercase;
  margin-bottom: 0;
  line-height: 1.2rem;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 45px;
  padding: 0 15%;
  line-height: 2rem;
  font-weight: 500;
  @media ${devices.laptop} {
    font-size: 1.2rem;
    padding: 0 15px !important;
  }
  @media ${devices.mobileLarge} {
    font-size: 1rem;
  }
  span,
  a {
    width: 100%;
    display: inline-block;
    font-size: 1rem;
    line-height: 0.9rem;
    font-style: normal !important;
    @media ${devices.laptop} {
      font-size: 0.9rem;
    }
    @media ${devices.mobileLarge} {
      font-size: 0.8rem;
    }
  }
  a {
    text-decoration: none;
    color: var(--color-white);
  }
  &.link {
    margin-bottom: 0 !important;
    a {
      font-size: 0.8rem;
      color: var(--color-white);
    }
  }
`

const StyledParagraphFeedBack = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  color: var(--color-gray);
  line-height: 1.2rem;
  text-align: center;
  margin-bottom: ${({ bottom }) => bottom || '10px'};
  @media ${devices.mobileLarge} {
    margin-bottom: ${({ bottom }) => bottom || '5px'};
    font-size: 0.9rem;
  }
`

export { StyledParagraph, StyledParagraphMain, StyledParagraphFeedBack }

import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  color: ${({ color }) => `var(--color-${color || 'white'})`};
  margin-bottom: 0;
  line-height: 120px;
  line-height: 1.2rem;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 45px;
  padding: 0 15%;
  line-height: 2rem;
  span {
    color: var(--color-green);
  }
`

const StyledParagraphMain = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  color: ${({ color }) => `var(--color-${color || 'green'})`};
  text-transform: uppercase;
  margin-bottom: 0;
  line-height: 120px;
  line-height: 1.2rem;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 45px;
  padding: 0 15%;
  line-height: 2rem;
  font-weight: 500;
  span,
  a {
    width: 100%;
    display: inline-block;
    font-size: 1rem;
    line-height: 0.9rem;
    font-style: normal !important;
  }
  a {
    text-decoration: none;
    color: var(--color-white);
  }
  &.link {
    margin-bottom: 0 !important;
    a {
      font-size: 0.8rem;
      color: var(--color-green);
    }
  }
`

export { StyledParagraph, StyledParagraphMain }

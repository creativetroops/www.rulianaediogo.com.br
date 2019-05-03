import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => `var(--color-${bg || 'gray'})`};
  z-index: 100 !important;
`

const StyledSection = styled.section`
  position: relative;
  float: left;
  padding-top: 100px;
  padding-bottom: 100px;
  max-width: 1000px;
  text-align: center;
  z-index: 101;
`

export { StyledContainer, StyledSection }

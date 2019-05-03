import styled from 'styled-components'

const StyledSeparator = styled.section`
  position: relative;
  height: 800px;
  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(
      rgba(54, 95, 79, 0.56),
      rgba(14, 13, 15, 0.64)
    ),
    url(${({ src }) => src});
`

export default StyledSeparator
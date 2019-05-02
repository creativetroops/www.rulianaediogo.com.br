import React from 'react'

import { StyledParagraph, StyledParagraphMain } from './styles'

const Paragraph = props => (
  <StyledParagraph {...props}>{props.children}</StyledParagraph>
)

const ParagraphMain = props => (
  <StyledParagraphMain {...props}>{props.children}</StyledParagraphMain>
)

export { Paragraph, ParagraphMain }

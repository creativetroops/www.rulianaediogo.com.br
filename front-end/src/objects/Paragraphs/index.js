import React from 'react'

import { StyledParagraph, StyledParagraphMain, StyledParagraphFeedBack } from './styles'

const Paragraph = props => <StyledParagraph {...props}>{props.children}</StyledParagraph>

const ParagraphMain = props => (
  <StyledParagraphMain {...props}>{props.children}</StyledParagraphMain>
)

const ParagraphFeedBack = props => (
  <StyledParagraphFeedBack {...props}>{props.children}</StyledParagraphFeedBack>
)

export { Paragraph, ParagraphMain, ParagraphFeedBack }

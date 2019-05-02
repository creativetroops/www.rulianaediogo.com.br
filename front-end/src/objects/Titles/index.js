import React from 'react'

import {
  StyledTitleMain,
  StyledSubTitleMain,
  StyledTitleMainItem,
} from './styles'

const TitleMain = props => <StyledTitleMain>{props.children}</StyledTitleMain>
const SubTitleMain = props => (
  <StyledSubTitleMain>{props.children}</StyledSubTitleMain>
)
const TitleMainItem = props => (
  <StyledTitleMainItem>{props.children}</StyledTitleMainItem>
)

export { TitleMain, SubTitleMain, TitleMainItem }

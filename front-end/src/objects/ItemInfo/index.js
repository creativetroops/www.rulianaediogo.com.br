import React from 'react'
import {
  StyledWrapperItemInfo,
  StyledImageItemInfo,
  StyledTitleItemInfo,
} from './styles'

const ItemInfo = ({ src, children }) => (
  <StyledWrapperItemInfo>
    <StyledImageItemInfo src={src} />
    <StyledTitleItemInfo>{children}</StyledTitleItemInfo>
  </StyledWrapperItemInfo>
)

export default ItemInfo

import React from 'react'
import { StyledWrapperItemInfo, StyledImageItemInfo, StyledTitleItemInfo } from './styles'

const ItemInfo = ({
  src, children, onClick, actived,
}) => (
  <StyledWrapperItemInfo onClick={onClick}>
    <StyledImageItemInfo src={src} />
    <StyledTitleItemInfo actived={actived}>{children}</StyledTitleItemInfo>
  </StyledWrapperItemInfo>
)

export default ItemInfo

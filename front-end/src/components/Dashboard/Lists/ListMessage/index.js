import React, { Fragment } from 'react'
import ListBase from '../ListBase'
import { SubTitleMain } from '../../../../objects/Titles'
import { Paragraph } from '../../../../objects/Paragraphs'

const ListMessages = ({ messages }) => (
  <Fragment>
    <SubTitleMain bottom="60px">mensagens</SubTitleMain>
    <Paragraph>Aqui estão as mensagens enviadas pelo site.</Paragraph>
    <ListBase data={messages} />
  </Fragment>
)

export default ListMessages

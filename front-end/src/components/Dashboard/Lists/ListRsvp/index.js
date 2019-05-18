import React from 'react'
import ListBase from '../ListBase'
import { SubTitleMain } from '../../../../objects/Titles'
import { Paragraph } from '../../../../objects/Paragraphs'

const ListRsvp = ({ rsvps }) => (
  <>
    <SubTitleMain bottom="60px">confirmação de presença</SubTitleMain>
    <Paragraph>Aqui estão as confirmações de presenças enviadas pelo site.</Paragraph>
    <ListBase data={rsvps} />
  </>
)

export default ListRsvp

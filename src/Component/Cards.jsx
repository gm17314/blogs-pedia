import React from 'react'
import styled from 'styled-components'
import { flex } from './Common'
import Card from './Card'

const Cards = () => {
    const Cards = styled(flex)`
        width: 80%;
        padding: 2rem;
        margin: auto;
        justify-content: start;
        flex-direction: column;

    `
  return (
    <Cards>
      <Card/>
      <Card/>
    </Cards>
  )
}
export default Cards

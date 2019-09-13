import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardHolder = () => {
    return (
        <CardHolderDiv>
            <Card>Hi</Card>
        </CardHolderDiv>
    )
}

const CardHolderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
`

export default CardHolder

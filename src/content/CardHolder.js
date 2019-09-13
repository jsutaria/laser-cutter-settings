import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardHolder = () => {
    return (
        <CardHolderDiv>
            <Card>Hi</Card>
            <Card>Hi</Card>
            <Card>Hi</Card>
            <Card>Hi</Card>
            <Card>Hi</Card>
        </CardHolderDiv>
    )
}

const CardHolderDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    width: 100%;
`

export default CardHolder

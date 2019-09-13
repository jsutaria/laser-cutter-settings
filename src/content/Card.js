import React from 'react'
import styled from 'styled-components'

const Card = props => {
    return (
        <CardDiv>
            {props.children}
        </CardDiv>
    )
}

const CardDiv = styled.div`
    display: flex;
    width: 200px;
    height: 200px;
    margin: 20px;
    padding: 10px;
    border-radius: 10px
    border: 1px solid black;
`

export default Card

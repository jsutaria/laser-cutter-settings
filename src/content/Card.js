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
    display: flex
    width: 320px
    height: 320px
`

export default Card

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Card from './Card'
import cut from '../cut.json'
import engrave from '../engrave.json'

const CardHolder = props => {
    const { setting } = props;
    const engraver_settings = setting === 'cut' ? cut : engrave;

    return (
        <CardHolderDiv>
            {engraver_settings.map(element => {
                const title = `${element.width} in - ${element.material}`
                return <Card key={title} material={element}></Card>
            }
            )}
        </CardHolderDiv>
    )
}

const CardHolderDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    width: 100%;
`

const mapStateToProps = state => {
    const { setting } = state.reduxProps;
    return { setting };
}

export default connect(mapStateToProps)(CardHolder)

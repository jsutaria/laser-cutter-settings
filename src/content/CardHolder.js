import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Card from './Card'
import cut from '../cut.json'
import engrave from '../engrave.json'

const CardHolder = props => {
    const { setting, material, thickness } = props;
    let engraver_settings = setting === 'cut' ? cut : engrave;
    if (material !== 'null') engraver_settings = engraver_settings.filter(item => item.material === material);
    if (thickness !== 'null') engraver_settings = engraver_settings.filter(item => item.width === thickness);
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
    const { setting, material, thickness } = state.reduxProps;
    return { setting, material, thickness };
}

export default connect(mapStateToProps)(CardHolder)

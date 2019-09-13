import React from 'react'
import styled from 'styled-components';

const TitleDiv = styled.div`
    display: flex;
    font-size: 32px;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: calc(100% - 40px);
`

const Title = () => {
    return (
        <TitleDiv>
            Trotec Laser Cutter Settings
        </TitleDiv>
    )
}

export default Title

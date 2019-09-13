import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import setValue from '../redux/actions/Action'

const SettingType = props => {
    const { setReduxValue, setting } = props;

    return (
        <SettingTypeDiv>
            <ItemDiv selected={setting === 'cut'} onClick={() => setReduxValue({ prop: 'setting', value: "cut" })}>Cut</ItemDiv>
            <ItemDiv selected={setting === 'engrave'} onClick={() => setReduxValue({ prop: 'setting', value: "engrave" })}>Engrave</ItemDiv>
        </SettingTypeDiv>
    )
}

const SettingTypeDiv = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #efefef;
`

const ItemDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: ${props => props.selected ? "#7f7f7f" : null};
    color: ${props => props.selected ? "#ffffff" : "#000000"};
    border: ${props => props.selected ? "2px" : "1px"} solid black;
`
const mapStateToProps = state => {
    const { setting } = state.reduxProps;
    return { setting };
}


export default connect(mapStateToProps, { setReduxValue: setValue })(SettingType);

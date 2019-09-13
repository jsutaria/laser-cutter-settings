import React from 'react'
import { connect } from 'react-redux'
import setValue from '../redux/actions/Action'
import styled from 'styled-components'

const doSomething = (e, name, setReduxValue) => {
    console.log(e.target.value);
    setReduxValue({ prop: name, value: e.target.value });
}

const Selectors = props => {
    const { setReduxValue } = props;
    return (
        <SelectorsDiv>
            <div>Settings:</div>
            <Selector onChange={e => doSomething(e, "material", setReduxValue)}>
                <option value={"null"}>Material</option>
                <option value={"acrylic"}>Acrylic</option>
                <option value={"duron"}>Duron</option>
                <option value={"plywood"}>Plywood</option>
            </Selector>
            <Selector onChange={e => doSomething(e, "thickness", setReduxValue)}>
                <option value={"null"}>Thickness</option>
                <option value={"0.125"}>0.125 in</option>
                <option value={"0.173"}>0.173 in</option>
                <option value={"0.25"}>0.25 in</option>
            </Selector>
        </SelectorsDiv>
    )
}

const Selector = styled.select`
    width: 100px;
`
const SelectorsDiv = styled.div`
    margin: 10px 0px 0px 0px;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
`

export default connect(null, { setReduxValue: setValue })(Selectors);

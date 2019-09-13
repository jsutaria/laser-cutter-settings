import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

class Card extends Component {
    state = {
        hover: false
    }

    render() {
        const { setting, material } = this.props;
        return (
            <CardDiv hover={this.state.hover} onMouseEnter={() => this.setState({ hover: true })} onMouseLeave={() => this.setState({ hover: false })}>
                {this.state.hover ?
                    <Main>
                        <Title>{`${material.width} in - `}<Mat>{material.material}</Mat></Title>
                        <div>
                            <p>Power: {material.settings.power}</p>
                            <p>Speed: {material.settings.speed}</p>
                        </div>
                    </Main> :
                    <Main>
                        <Size>{`${material.width} in`}</Size>
                        <Material>{material.material}</Material>
                    </Main>
                }
            </CardDiv>
        )
    }
}

const Mat = styled.span`
text-transform: capitalize;
`
const Title = styled.div`
font-weight: 600
`

const Main = styled.div`
    display: flex;
    color: #e7ecef;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
`
const Size = styled.div`
    text-transform: lowercase;
    font-weight: 700
    margin: 10px;
`

const Material = styled.div`
    text-transform: uppercase;
    font-weight: 900
`
const CardDiv = styled.div`
    display: flex;
    width: 200px;
    height: 200px;
    margin: 20px;
    border-radius: 10px
    border: 1px solid black;
    background-color: ${props => props.hover ? '#0f7173' : '#f05d5e'};
    justify-content: center;
    align-items: center;
`

const mapStateToProps = state => {
    const { setting } = state.reduxProps;
    return { setting };
}

export default connect(mapStateToProps)(Card)

import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterDiv>
            Made with ❤ ️by <a href="http://jainilsutaria.com/">Jainil Sutaria</a>. Please suggest edits <a href="https://github.com/jsutaria/laser-cutter-settings">here</a>!
        </FooterDiv>
    )
}

const FooterDiv = styled.div`
    width: 100%;
    text-align: center;
`

export default Footer

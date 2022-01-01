import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
    display: grid;
    place-items: center;
    margin-top: auto;
    padding: 50px;
    font-size: 15px;
    text-align: center;
    line-height: 1.5;
`

const Footer: FunctionComponent = function () {
    return (
        <FooterWrapper>
            Thnk u 4 visiting my blog, have a good day 🥰
            <br />© 2021 Developer Trondi, Powered By Gatsby.
        </FooterWrapper>
    )
}

export default Footer
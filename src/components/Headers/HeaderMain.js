import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";

const HeaderMainStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
`

const ShopName = styled.h1`

    text-align: center;
    font-family: Heebo, sans-serif;

    @media (max-width: 600px) {
        width: 100%;
      }
`

const LinkStyled = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`

const headerMain = (props) => {
    return (
        <HeaderMainStyled>
            <ShopName>
                <LinkStyled to='/'>
                    <img src={'/logo.jpg'} alt="Logo" width="360px" />
                </LinkStyled>
            </ShopName>
        </HeaderMainStyled>
    )
}

export default headerMain;
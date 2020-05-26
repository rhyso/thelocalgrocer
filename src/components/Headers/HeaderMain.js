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

const Desc = styled.p`
    max-width: 600px;
        margin-top:40px;
   
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
                    <Desc>
                    <p>Your Local Grocer. Supplying quality, fresh fruit and vegetables to your door. <br/> 

                    Delivering bespoke fruit and veg boxes on a time scale that suits you! 
                    <br/><br/>
                    Travelling between Magor and Chepstow to deliver bespoke boxes and provide a roadside grocery service that saves the long queues and cuts down the wait times at supermarkets. <br/><br/> 

                    Put the choice in your hands. Choose your own produce. Choose The Local Grocer. <br/><br/>

                    Any problems feel free to contact <b><a href="mailto:order@thelocalgrocer.co.uk">order@thelocalgrocer.co.uk</a></b></p>
                    </Desc>
                </LinkStyled>
            </ShopName>
        </HeaderMainStyled>
    )
}

export default headerMain;
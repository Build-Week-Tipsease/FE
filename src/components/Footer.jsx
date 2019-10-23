import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Foot = styled.div`
    background-color: #d3e8d0;
    
`

const P1 = styled.p`
    border-right: solid 1px black;
    width: 33%;
    justify-content: center;
    align-items: center;
`
const P2 = styled.p`
    border-right: solid 1px black;
    width: 33%;
    justify-content: center;
    align-items: center;
`
const P3 = styled.p`
    width: 33%;
    justify-content: center;
    align-items: center;
`
const Foot1 = styled.div`
    display:flex;
`
const Foot2 = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 0 5px;
    font-size: 10px;
    margin: -10px 14px 0 0;
`
const Footer = () => {


    return (
        
        <Foot className='footer'>
            <Foot1>
            <P1>Contact Us</P1>
            <P2>Support</P2>    
            <P3>privacy Policy</P3>
            </Foot1>
            <Foot2>
                <p>© 2019 Tipease</p>
                <p>Terms and Conditions</p>
            </Foot2>
        </Foot>
    )
}

export default Footer;
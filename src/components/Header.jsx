import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Image01 = styled.img`
height: 70px;

`
const Head = styled.div`
    background-color: #d3e8d0;
    display:flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
`



const Header = () => {

    return (
        <Head>
            <Image01 src='/images/tipsease logo.png' />
            <div>
            
            <Link to='/'>
            <Button>~logout~</Button>
            </Link>
            </div>
        </Head>

    )
}
export default Header;
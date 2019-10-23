import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Image01 = styled.img`
height: 50px;

`
const Head = styled.div`
    background-color: #d3e8d0;
    display:flex;
    justify-content: space-between;
    padding: 10px 10px;
    align-items: center;
`



const Header = () => {

    return (
        <Head className='header'>
            <Image01 src='/images/tipsease logo.png' />
            <div>
            
            <Link to='/'>
            <Button className='logout'>~logout~</Button>
            </Link>
            </div>
        </Head>

    )
}
export default Header;
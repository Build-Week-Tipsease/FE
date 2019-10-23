import React, { useEffect, useState } from 'react'
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



const Header = (props) => {
const [token, setToken ] = useState(''); 
const logOut = () => {
  localStorage.clear();
  //this.props.history.replace('/');
}

useEffect(() => {
  const localToken = localStorage.getItem('token');
  setToken(localToken);
}, [])

    return (
        <Head className='header'>
            <Image01 src='/images/tipsease logo.png' />
            
            {token &&
            (<Link to='/dashboard'>
              Dashboard
            </Link>)
            }

            <div>
            
            

            <Link to='/'>
            <Button className='logout' onClick={logOut}>~logout~</Button>
            </Link>
            </div>
        </Head>

    )
}
export default Header;
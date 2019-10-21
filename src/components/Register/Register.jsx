import React from 'react'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Button, Input, Icon, Typography, Form  } from 'antd';
import { Link } from 'react-router-dom';

const Container = styled.div`
background-color: #363237;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Innerdiv = styled.div`
height: 70vh;
width: 30vw;
background-color: white;
border: 1px solid grey;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 0 50px;
border-radius: 0 10px 10px 0;
`
const Image = styled.img`
  height: 70%;
  border-radius: 10px 0 0 10px;
`;
const StyledButton = styled(Button)`
  font-family: 'Open Sans', sans-serif;
`;

const Register = () => {

    return(
        <Container className='main-card'>
            <Image src='/images/waiter.jpg' alt='waiter' />

            <Innerdiv>
                
              
                <h1>Enter Fields To Register</h1>

                <Link to='/register/new_user/'>
                    <StyledButton>Customer Register</StyledButton>
                </Link>
                <Link to='/register/waiter_reg/'>
                    <StyledButton>Waiter Register</StyledButton>
                </Link>

                    <p>Login Instead</p>
                    <Link to='/'>Login</Link>
                
            </Innerdiv>
        </Container>
    )
}


export default Register;
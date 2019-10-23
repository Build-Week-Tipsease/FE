import React from 'react'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Button, Input, Icon, Typography, Form  } from 'antd';
import { Link } from 'react-router-dom';

const Container = styled.div`
background-color: #0c1d09;
  height: 81vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Innerdiv = styled.div`
height: 51vh;
width: 30vw;
background-color: #d3e8d0;
border: 1px solid grey;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 0 50px;
border-radius: 0 10px 10px 0;
`
const Image = styled.img`
  height: 63%;
  border-radius: 10px 0 0 10px;
`;
const NewButton = styled.button`
background-color: #38af78;
  border-radius: 10px;
  color: #fff;
  border: 2px solid #6fa0d0 !important;
  transition: background-color 0.5s;
  margin: 0 10px;
  &:hover {
    background-color: #fff;
    color: #6fa0d0;
  }
  &:focus {
    background-color: #fff;
    color: #6fa0d0;
  }
`

const Register = () => {

    return(
        <Container className='main-card'>
            <Image src='/images/waiter.jpg' alt='waiter' />

            <Innerdiv>
                
              
                <h1>Enter Fields To Register</h1>

                <Link to='/register/new_user/'>
                    <NewButton>Customer Register</NewButton>
                </Link>
                <Link to='/register/waiter_reg/'>
                    <NewButton>Waiter Register</NewButton>
                </Link>

                    <p>Already have an account?</p>
                    <Link to='/'>
                      <NewButton>Login</NewButton>
                      </Link>
                
            </Innerdiv>
        </Container>
    )
}


export default Register;
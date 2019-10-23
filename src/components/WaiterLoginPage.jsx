import React, { useState } from 'react'
import './LoginPage.css'
import axios from 'axios';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Button, Input, Icon, Typography, Form  } from 'antd';
import {Route, Link } from 'react-router-dom';
import CustomerReg from './Register/CustomerReg'
import { baseUserApi } from '../state/actionCreators'

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
const NewButton = styled(Button)`
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
`;

const initialLoginFeild = {
    username: '',
    password: '',
}

const WaiterLoginPage = (props) => {
    
    const {values, handleBlur, handleSubmit, touched, errors} = props

    const [loginFeild, setLoginFeild] = useState(initialLoginFeild)

    const handleChange = (e) => {
        setLoginFeild({...loginFeild, [e.target.name]: e.target.value});
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(`${baseUserApi}/api/serviceworker/login`, loginFeild)
            .then(res => {
                console.log(res.token)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('role', 'worker')
                props.history.push('/dashboard')
            })
            .catch(err => {
                alert(err.message);
            })
            setLoginFeild(initialLoginFeild);
    }

    return(
        <Container className='main-card'>
            <Image src='/images/waiter.jpg' alt='waiter' />

            <Innerdiv>
                
              
                <h1>Welcome to Tipsease</h1>

                <form onSubmit={handleLogin}>
                    <Form.Item help={touched.username && errors.username ? errors.username : ""} help={touched.username && errors.username ? errors.username : ""}>
                        <Input 
                        name='username'
                        type='text'
                        size='large' 
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}

                        placeholder='Username'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        />
                    </Form.Item>

                    <Form.Item help={touched.password && errors.password ? errors.password : ""}
                    validateStatus={
                    touched.password && errors.password ? "error" : undefined }>
                        <Input 
                        name='password'
                        type='password'  
                        size='large'
                        placeholder='Password' 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        onBlur = {handleBlur}
                        onChange={handleChange}
                        />
                    </Form.Item>
                   
                    <NewButton type="primary" htmlType='submit'>
                        Login
                    </NewButton>

                    <p>Need To Register?</p>
                    <Link to='/register'>
                        <NewButton>Register here</NewButton>
                    </Link>
                    {/* <Route exact path='/' render={props => <WaiterLoginPage {...props} />} /> */}
                    {/* <Route exact path='/new_user' render={props => <CustomerReg {...props}/> }/> */}
                </form>

               
            </Innerdiv>
        </Container>
    )
}

const validationSchema = Yup.object().shape({
    username: Yup.string()
    .min(4, 'Too Short!')
    .required(),
    password: Yup.string()
    .required('Please enter a password')
    .min(8, 'Password too short')
})

const FormikWaiterLoginPage = withFormik({
    mapPropsToValues: () => ({username: '', password:''}),
    handleSubmit:(values, {props, setSubmitting})=>{
        props.getLogi(values, props)
        setSubmitting(false)
    },

validationSchema:validationSchema

})(WaiterLoginPage)

export default FormikWaiterLoginPage;

import React, { useState } from 'react'
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

const initialCustomerRegFeild = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
}

const CustomerReg = (props) => {
    const {values, handleBlur, handleSubmit, touched, errors} = props

    const [customerRegFeild, setCustomerRegFeild] = useState(initialCustomerRegFeild)

    const handleChange = (e) => {
        setCustomerRegFeild({...customerRegFeild, [e.target.name]: e.target.value});
    }

    const handleCustomerReg = (e) => {
        e.preventDefault();
        const done = customerRegFeild
        debugger
    }

    return(
        <Container className='main-card'>
            <Image src='/images/waiter.jpg' alt='waiter' />

            <Innerdiv>
                
              
                <h1>New Customer Register</h1>

                <form onSubmit={handleCustomerReg}>
                    <Form.Item>
                        <Input 
                         size="large"
                         name="firstname"
                         placeholder="First Name"
                         onBlur={handleBlur}
                         onChange={handleChange}
                          />
                    </Form.Item>

                    <Form.Item>
                        <Input 
                        size="large"
                        name="lastname"
                        placeholder="Last Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    </Form.Item>
                    
                    <Form.Item>
                        <Input 
                        size="large"
                        name="email"
                        placeholder="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    </Form.Item>

                    <Form.Item  >
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

                    <Form.Item>
                        <Input 
                        name='password'
                        type='password'  
                        size='large'
                        placeholder='Password' 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        />
                    </Form.Item>
                   
                    <Button type="primary" htmlType='submit'>
                        Login
                    </Button>

                    <p>Login Instead</p>
                    <Link to='/'>Login</Link>
                    
                </form>

                
            </Innerdiv>
        </Container>
    )
}

const FormikCustomerReg = withFormik({
    mapPropsToValues({first_name, last_name, username, password}){
        return{
            first_name: first_name || '',
            last_name: last_name || '',
            username: username || '',
            password: password || ''
           
        }
    },

validationSchema: Yup.object().shape({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required('Please enter a password')
    .min(8, 'Password too short')
}),
})(CustomerReg)
export default FormikCustomerReg;
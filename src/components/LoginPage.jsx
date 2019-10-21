import React, { useState } from 'react'
import './LoginPage.css'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Button, Input, Icon, Typography, Form  } from 'antd';
import {Route, Link } from 'react-router-dom';
import CustomerReg from './Register/CustomerReg'

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

const initialLoginFeild = {
    username: '',
    password: '',
}

const LoginPage = (props) => {
    const {values, handleBlur, handleSubmit, touched, errors} = props

    const [loginFeild, setLoginFeild] = useState(initialLoginFeild)

    const handleChange = (e) => {
        setLoginFeild({...loginFeild, [e.target.name]: e.target.value});
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const done = loginFeild
        debugger
        // axios.post('', loginFeild)
        //     .then(res => {
        //         debugger
        //         localStorage.setItem('token', res)
        //         props.history.push('')
        //     })
        //     .catch(err => {
        //         debugger
        //     })
        //     setLoginFeild(initialLoginFeild);
    }

    return(
        <Container className='main-card'>
            <Image src='/images/waiter.jpg' alt='waiter' />

            <Innerdiv>
                
              
                <h1>Welcome to Tipsease</h1>

                <form onSubmit={handleLogin}>
                    <Form.Item   >
                        <Input 
                        name='username'
                        type='text'
                        size='large' 
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder='Username' 
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
                        onChange={handleChange}
                        />
                    </Form.Item>
                   
                    <Button type="primary" htmlType='submit'>
                        Login
                    </Button>

                    <p>Need To Register</p>
                    <Link to='/register'>Register</Link>
                    {/* <Route exact path='/' render={props => <LoginPage {...props} />} /> */}
                    {/* <Route exact path='/new_user' render={props => <CustomerReg {...props}/> }/> */}
                </form>

               
            </Innerdiv>
        </Container>
    )
}

const FormikLoginPage = withFormik({
    mapPropsToValues({username, password}){
        return{
            username: username || '',
            password: password || ''
           
        }
    },

validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required('Please enter a password')
    .min(8, 'Password too short')
}),
})(LoginPage)
export default FormikLoginPage;

// import { Button } from 'antd';

// ReactDOM.render(
//   <div>
//     <Button type="primary">Primary</Button>
//     <Button>Default</Button>
//     <Button type="dashed">Dashed</Button>
//     <Button type="danger">Danger</Button>
//     <Button type="link">Link</Button>
//   </div>,
//   mountNode,
// );
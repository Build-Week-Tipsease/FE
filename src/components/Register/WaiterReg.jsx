import React, { useState } from 'react'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Input, Icon, Typography, Form  } from 'antd';
import { Link } from 'react-router-dom';
import * as actionCreators from '../../state/actionCreators'

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
`;

export const initialWaiterRegFeild = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    customerOrService: true,
    tagline: '',
    company: '',
    yearsAtCompany: 0
}


const WaiterReg = (props) => {

    const {values, handleBlur, handleSubmit, touched, errors} = props

    const [waiterRegFeild, setWaiterRegFeild] = useState(initialWaiterRegFeild)

    const handleChange = (e) => {
        setWaiterRegFeild({...waiterRegFeild, [e.target.name]: e.target.value});
    }

    const handleWaiterReg = (e) => {
        e.preventDefault();
        props.addNewWaiter(waiterRegFeild);
        props.history.push('/waiter_login');
    }

    return(
        <Container className='main-card'>
            <Image src='/images/waiter.jpg' alt='waiter' />

            <Innerdiv>
                
              
                <h1>Register as a Worker</h1>

                <form onSubmit={handleWaiterReg}>

                    <Form.Item help={touched.first_name && errors.first_name ? errors.first_name : ""}
                    validateStatus={touched.first_name && errors.first_name ? "error" : undefined}>
                        <Input 
                         size="large"
                         name="firstname"
                         placeholder="First Name"
                         onBlur={handleBlur}
                         onChange={handleChange}
                          />
                    </Form.Item>

                    <Form.Item help={touched.last_name && errors.last_name ? errors.last_name : ""}
                    validateStatus={touched.last_name && errors.last_name ? "error" : undefined}>
                        <Input 
                        size="large"
                        name="lastname"
                        placeholder="Last Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    </Form.Item>

                    <Form.Item help={touched.email && errors.email ? errors.email : ""}
                     validateStatus={touched.email && errors.email ? "error" : undefined}>
                        <Input 
                        size="large"
                        name="email"
                        placeholder="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    </Form.Item>

                    <Form.Item help={touched.username && errors.username ? errors.username : ""}

                    validateStatus={
                    touched.username && errors.username ? "error" : undefined} >
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
                    touched.password && errors.password ? "error" : undefined}>
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

                    <Form.Item>
                        <Input 
                        name='tagline'
                        type='text'  
                        size='large'
                        placeholder='Tagline' 
                        onBlur={handleBlur}
                        onChange={handleChange}

                        />
                    </Form.Item>
                    <Form.Item>
                        <Input 
                        name='yearsAtCompany'
                        type='text'  
                        size='large'
                        placeholder='Time at current job' 
                        onBlur={handleBlur}
                        onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input 
                        name='company'
                        type='text'  
                        size='large'
                        placeholder='Company' 
                        onBlur={handleBlur}
                        onChange={handleChange}
                        />
                    </Form.Item>

                    {/* <div>
                        
                        <Input type='checkbox' name='service' value='' onClick={showServiceFeilds} />I am a service provider
                        
                        <div hidden={waiterRegFeild.services}>
                            {dialog}
                        </div>
                        
                    </div> */}
                   
                    <NewButton type="primary" htmlType='submit'>
                        Sign Up
                    </NewButton>

                    <p>Already have an account? Login</p>
                    <Link to='/'>
                        <NewButton>Login</NewButton>
                        </Link>
                    
                </form>

                
            </Innerdiv>
        </Container>
    )
}


const validationSchema = Yup.object().shape({
    first_name: Yup.string()
    .required("Please provide your first name")
    .min(2, "Name is too short"),

    last_name: Yup.string()
    .required("Please provide your last name")
    .min(2, "Name is too short"),

    email: Yup.string()

    .required('Please provide a email'),

    username: Yup.string()
    .email("Email is not valid")

    .required("Please provide an username"),

    password: Yup.string().required('Please enter a password')
    .min(8, 'Password too short')
});
const FormikWaiterReg = withFormik({
    mapPropsToValues({first_name, last_name, email, username, password}){
        return{
            first_name: first_name || '',
            last_name: last_name || '',
            email: email || '',
            username: username || '',
            password: password || ''
           
        }
    },

validationSchema: validationSchema
})(WaiterReg)
export default connect(
    state => state,
    actionCreators,
)(FormikWaiterReg);
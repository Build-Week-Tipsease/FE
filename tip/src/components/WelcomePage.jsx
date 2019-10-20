import React from 'react'
import './WelcomePage.css'
import { withFormik } from 'formik';
import * as yup from 'yup';
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


const WelcomePage = (props) => {

    const {values, handleChange, handleBlur, handleSubmit, touched, errors} = props

    return(
        <Container className='main-card'>
            <Image src='/images/waiter.jpg' alt='waiter' />

            <Innerdiv>
                
              
                <h1>Welcome to Tipsease</h1>

                <form>
                    <Form.Item>
                        <input 
                        
                        size='large' 
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder='Username' 
                        />
                    </Form.Item>

                    <Form.Item>
                        <input 
                        type='password'  
                        placeholder='Password' 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        />
                    </Form.Item>
                   
                    <Button type="primary" htmlType='submit'>
                        Login
                    </Button>

                    <p>Need To Register</p>
                    <Link >Register</Link>
                    
                </form>

               
            </Innerdiv>
        </Container>
    )
}
export default WelcomePage;

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
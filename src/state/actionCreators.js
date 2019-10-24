import * as types from './actionTypes';
import axios from 'axios'
import withAuth from '../components/axios'

export const baseUserApi = `https://tipsease-msm.herokuapp.com`
console.log(`${baseUserApi}/api/customers/signup`)

export const addNewCustomer = (customerRegFeild) => dispatch => {
    
    axios.post(`${baseUserApi}/api/customers/signup`, customerRegFeild)
        .then(res => {
            console.log(res)
            
            dispatch({ type: types.ADD_NEW_USER, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            
            dispatch({ type: types.ERROR_SIGNING_UP, payload: err.message })
        })
}

export const addNewWaiter = (waiterRegFeild) => dispatch => {
    
    withAuth().post(`${baseUserApi}/api/serviceworker/signup`, waiterRegFeild)
        .then(res => {
            console.log(res)
          
            dispatch({ type: types.ADD_NEW_USER, payload: res.data})
        })
        .catch(err => {
            console.log(err)
       
            dispatch({ type: types.ERROR_SIGNING_UP, payload: err.message })
        })
}
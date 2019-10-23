import * as types from './actionTypes';
import axios from 'axios'
import withAuth from '../components/axios'

export const baseUserApi = `https://tipsease-msm.herokuapp.com`
console.log(`${baseUserApi}/api/customers/signup`)

export const addNewCustomer = (customerRegFeild) => dispatch => {
    debugger
    axios.post(`${baseUserApi}/api/customers/signup`, customerRegFeild)
        .then(res => {
            console.log(res)
            debugger
            dispatch({ type: types.ADD_NEW_USER, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            debugger
            dispatch({ type: types.ERROR_SIGNING_UP, payload: err.message })
        })
}

export const addNewWaiter = (waiterRegFeild) => dispatch => {
    debugger
    withAuth().post(`${baseUserApi}/api/serviceworker/signup`, waiterRegFeild)
        .then(res => {
            console.log(res)
            debugger
            dispatch({ type: types.ADD_NEW_USER, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            debugger
            dispatch({ type: types.ERROR_SIGNING_UP, payload: err.message })
        })
}
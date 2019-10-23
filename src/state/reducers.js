import * as types from '../state/actionTypes';
import { initialCustomerRegFeild } from '../components/Register/CustomerReg'
import { initialWaiterRegFeild } from '../components/Register/WaiterReg'

export function customerReducer(user = initialCustomerRegFeild, action) {
    debugger
    switch (action.type) {
        case types.ADD_NEW_USER:
            return action.payload;
        case types.ERROR_SIGNING_UP:
            return alert(action.payload);
        default:
            return user;
    }
}

export function waiterReducer(user = initialWaiterRegFeild, action) {
    debugger
    switch (action.type) {
        case types.ADD_NEW_USER:
            return action.payload;
        case types.ERROR_SIGNING_UP:
            return alert(action.payload);
        default:
            return user;
    }
}
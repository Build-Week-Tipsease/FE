import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import CustomerLoginPage from '../CustomerLoginPage'
import WaiterLoginPage from '../WaiterLoginPage'
import CustomerReg from '../Register/CustomerReg'
import WaiterReg from '../Register/WaiterReg'
import Register from '../Register/Register'
import Footer from '../Footer'
import Dashboard from '../Dashboard/index'
import ViewWorker from '../Dashboard/ViewWorker'


const Routes = (props) => {
    const localToken = localStorage.getItem('token');

return(
    <div>
    <Header/>
    <Route exact path='/home' render={() => <Redirect to='/register' />} />
    <Route exact path='/' render={() => <Redirect to ='/register'/>} />
    
    <Route exact path='/customer_login' component={CustomerLoginPage} />
    <Route exact path='/waiter_login' component={WaiterLoginPage} />

    <Route exact path='/register' component={Register} />
    <Route exact path='/' component={Register} />

    <Route exact path='/dashboard' render={props => {
        if(localStorage.getItem('token')) return <Dashboard {...props} /> 
        return <Redirect to='/register' />
        }} />

    <Route exact path='/register' render={props => {
        if(localStorage.getItem('token')) return <Redirect to='/dashboard' />
        return <Redirect to='/register' />
        }} />

    <Route exact path='/' render={props => {
        if(localStorage.getItem('token')) return <Redirect to='/dashboard' />
        return <Redirect to='/register' />
        }} />

    {localStorage.getItem('token') ? <Route exact path='/tipworker' component={ViewWorker} /> : <Redirect to='/' />}

    <Route exact path='/register/new_user' render={props => <CustomerReg {...props}/> }/>
    <Route exact path='/register/waiter_reg' render={props => <WaiterReg {...props}/> }/>

    <Footer />
    </div>
)
}
export default Routes;
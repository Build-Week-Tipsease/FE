import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import LoginPage from '../LoginPage'
import CustomerReg from '../Register/CustomerReg'
import WaiterReg from '../Register/WaiterReg'
import Register from '../Register/Register'
import Footer from '../Footer'
import Dashboard from '../Dashboard/index'


const Routes = () => {

return(
    <div>
<Route exact path='/home' render={() => <Redirect to='/' />} />
<Route exact path='/' render={() => <Redirect to ='/welcome'/>} />

<Header />
<Route exact path='/welcome' component={LoginPage} />


<Route exact path='/register' component={Register} />
<Route exact path='/dashboard' component={Dashboard} />

<Route exact path='/register/new_user' render={props => <CustomerReg {...props}/> }/>
<Route exact path='/register/waiter_reg' render={props => <WaiterReg {...props}/> }/>

    <Footer />
    </div>
)
}

export default Routes;
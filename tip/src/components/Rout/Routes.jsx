import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import WelcomePage from '../WelcomePage'
import CustomerReg from '../Register/CustomerReg'
import WaiterReg from '../Register/WaiterReg'
import Register from '../Register/Register'

const Routes = () => {

return(
    <div>
<Route exact path='/home' render={() => <Redirect to='/' />} />
<Route exact path='/' render={() => <Redirect to ='/welcome'/>} />
<Route exact path='/welcome' component={WelcomePage} />


<Route exact path='/register' component={Register} />

<Route exact path='/register/new_user' render={props => <CustomerReg {...props}/> }/>
<Route exact path='/register/waiter_reg' render={props => <WaiterReg {...props}/> }/>
    </div>
)
}

export default Routes;
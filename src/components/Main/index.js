import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Users from '../../containers/Users'
import Login from '../Login'
import Signup from '../Signup'
import ForgotPassword from '../ForgotPassword'
import ClientAccount from '../ClientAccount'
import ClientSpace from '../ClientSpace'
import ResetPassword from '../ResetPassword'
import PasswordChanged from '../PasswordChanged'
import TwoFactorsAuth from '../TwoFactorsAuth'
import {PrivateRoute} from '../PrivateRoute'

const Main = props => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Signup" component={Signup}></Route>
        <Route path="/users" component={Users} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <PrivateRoute path="/clientAccount" component={ClientAccount} />
        <PrivateRoute path="/clientSpace" component={ClientSpace} />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/passwordChanged" component={PasswordChanged} />
        <Route path="/twoFactorsAuth" component={TwoFactorsAuth} />
    </Switch>
);

export default Main;
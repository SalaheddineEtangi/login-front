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
import {ProtectedRoutes} from '../PrivateRoutes/protectedRoutes'
import {TwoFactorsAuthRoute} from '../PrivateRoutes/twoFactorsAuthRoute'
import {ResetPasswordRoute} from '../PrivateRoutes/resetPasswordRoute'

const Main = props => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Signup" component={Signup}></Route>
        <Route path="/users" component={Users} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <ProtectedRoutes path="/clientAccount" component={ClientAccount} />
        <ProtectedRoutes path="/clientSpace" component={ClientSpace} />
        <ResetPasswordRoute path="/resetPassword" component={ResetPassword} />
        <Route path="/passwordChanged" component={PasswordChanged} />
        <TwoFactorsAuthRoute path="/twoFactorsAuth" component={TwoFactorsAuth} />
    </Switch>
);

export default Main;
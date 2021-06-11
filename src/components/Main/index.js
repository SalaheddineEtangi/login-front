import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Users from '../../containers/Users';
import SingleUser from '../../containers/SingleUser';
import Login from '../Login';
import Signup from '../Signup'
import ForgotPassword from '../ForgotPassword'

const Main = props => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Signup" component={Signup}></Route>
        <Route path="/users" component={Users} />
        <Route path="/users/:id" component={SingleUser} />
        <Route path="/forgotPassword" component={ForgotPassword} />
    </Switch>
);

export default Main;
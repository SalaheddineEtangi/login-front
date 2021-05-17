import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Users from '../../containers/Users';
import SingleUser from '../../containers/SingleUser';
import AlreadyClient from '../Forms/AlreadyClient';

const Main = props => (
    <Switch>
        <Route exact path="/" component={AlreadyClient} />
        <Route path="/users" component={Users} />
        <Route path="/users/:id" component={SingleUser} />
    </Switch>
);

export default Main;
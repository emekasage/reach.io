import React from 'react'
import {Route, Switch} from 'react-router-dom'

import ResetPassword from './ResetPassword';
import Dashboard from './Dashboard';
import Users from './Users';
import Settings from './Settings';
import Admin from './Admin';
import Login from './Login';
import Home from './Home';
import Campaign from './Campaign'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
                <Route path="/resetpassword" component={ResetPassword} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/users" component={Users} />
                <Route path="/settings" component={Settings} />
                <Route path="/admin" component={Admin} />
                <Route path="/campaign" component={Campaign} />
            </Switch>
        </div>
    )
}

import React, {useContext} from 'react'
import {Route, Switch} from 'react-router-dom'

import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Users from './pages/Connections';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Campaign from './pages/Campaign'
import BuyCredit from './pages/BuyCredit'

// Admin Routes
import AdminDashboard from './admin/Dashboard';
import AdminUsers from './admin/Clients';
import AdminSettings from './admin/Settings';
import AdminCampaign from './admin/Campaign'
import {providerFunctions} from "./provider/FunctionsProvider"
import AppModal from './components/AppModal';

export default function Routes() {
    const {
        showSideBar,
        setShowSideBar,
        showModal, 
        setShowModal,
        modalPage, 
        setModalPage
    } = useContext(providerFunctions)
      
    return (
        <div>
            {showModal &&
				<AppModal></AppModal>
			}
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/resetpassword" component={ResetPassword} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/users" component={Users} />
                <Route path="/settings" component={Settings} />
                <Route path="/campaign" component={Campaign} />
                <Route path="/buycredit" component={BuyCredit} />


                {/********** ADMIN ROUTES **********/}
                
                <Route path="/admin" component={AdminDashboard} exact/>
                <Route path="/admin/clients" component={AdminUsers} />
                <Route path="/admin/settings" component={AdminSettings} />
                <Route path="/admin/campaign" component={AdminCampaign} />
            </Switch>
        </div>
    )
}

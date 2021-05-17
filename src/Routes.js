import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Connections";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Campaign from "./pages/Campaign";
import BuyCredit from "./pages/BuyCredit";
import Signup from "./pages/Signup";
import ChangePassword from "./pages/ChangePassword";
// Admin Routes
import AdminLogin from "./pages/LoginAdmin";
import AdminDashboard from "./admin/Dashboard";
import AdminUsers from "./admin/Clients";
import AdminSettings from "./admin/Settings";
import AdminCampaign from "./admin/Campaign";
import { providerFunctions } from "./provider/FunctionsProvider";
import AppModal from "./components/AppModal";

export default function Routes() {
  const { showModal, loggedIn } = useContext(providerFunctions);

  return (
    <div>
      {showModal && <AppModal></AppModal>}
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/changepassword" component={ChangePassword} />
        <Route path="/login" component={loggedIn ? Dashboard : Login} />
        <Route
          path="/resetpassword"
          component={loggedIn ? Dashboard : ResetPassword}
        />
        <Route path="/dashboard" component={loggedIn ? Dashboard : Login} />
        <Route path="/users" component={loggedIn ? Users : Login} />
        <Route path="/settings" component={loggedIn ? Settings : Login} />
        <Route path="/campaign" component={loggedIn ? Campaign : Login} />
        <Route path="/buycredit" component={loggedIn ? BuyCredit : Login} />

        {/********** ADMIN ROUTES **********/}

        <Route
          path="/admin"
          component={loggedIn ? AdminDashboard : AdminLogin}
          exact
        />
        <Route
          path="/admin/dashboard"
          component={loggedIn ? AdminDashboard : AdminLogin}
        />
        <Route
          path="/admin/clients"
          component={loggedIn ? AdminUsers : AdminLogin}
        />

        <Route
          path="/admin/settings"
          component={loggedIn ? AdminSettings : AdminLogin}
        />
        <Route
          path="/admin/campaign"
          component={loggedIn ? AdminCampaign : AdminLogin}
        />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

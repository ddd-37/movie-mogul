import React from "react";
import { Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// Components
import PublicRoute from "./PublicRoute/PublicRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import FirebaseUI from "./../FirebaseUI/FirebaseUI";
import DashboardPage from "../DashboardPage/DashboardPage";
import AccountPage from "../AccountPage/AccountPage";

// becuase we need to access to the history in index when we check for auth, weneed to create an instance of it here to pass around
export const history = createBrowserHistory();
const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" exact component={FirebaseUI} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/settings" component={AccountPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

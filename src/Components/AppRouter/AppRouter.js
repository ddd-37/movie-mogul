import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import RequestList from "../RequestList/RequestList";
import AddRequest from "./../AddRequest/AddRequest";

export const AppRouter = () => (
  <Switch>
    <Route path="/" exact component={RequestList} />
    <Route path="/addRequest" exact component={AddRequest} />
  </Switch>
);

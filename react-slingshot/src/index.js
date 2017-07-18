import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";





//Application assets

// import "./assets/css/bootstrap.css";

import Index from "./components/Index";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import User from "./components/User";
import EditUser from "./components/EditUser";


const restrict = () => {
    if (!window.localStorage.getItem("token")) {
        browserHistory.push("/login");
    }
}


ReactDom.render(
    <Router history={browserHistory}>
          <Route path="/" component={Index} />
         <Route path="/login" component={Login} />
        <Route path ="/users/new" component={NewUser} />
        <Route path="/users/:id" component={User} onEnter={restrict} />
        <Route path="/users/:id/edit" component={EditUser} onEnter={restrict} />
    </Router>
, document.getElementById("app"));

// Set up your application entry point here...

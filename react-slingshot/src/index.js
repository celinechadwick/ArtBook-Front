import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

// app.use(express.static(__dirname + "/dist"));
//
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/dist/index.html");
// });




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
        <Route path="/users/login" component={Login} />
        <Route path ="/users/new" component={NewUser} />
        <Route path="/users/:id" component={User} onEnter={restrict} />
        <Route path="/users/:id/edit" component={EditUser} onEnter={restrict} />
    </Router>
, document.getElementById("app"));


app.listen(process.env.PORT || 3000);
// Set up your application entry point here...

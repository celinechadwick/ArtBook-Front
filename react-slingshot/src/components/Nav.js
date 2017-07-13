import React, { Component } from "react";
import { Link } from "react-router";

import LoggedNav from "./LoggedNav";
import GuestNav from "./GuestNav";

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (window.localStorage.getItem("token")) {
            return (
                <LoggedNav />
            );
        } else {
            return (
                <GuestNav />
            );
        }
    }
}

export default Nav;

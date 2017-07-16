import React, { Component } from "react";
import { Link } from "react-router";
const Style = {width:'200', height:'200', padding:'20px'};
const NavStyle = {'background-color':'white', margin:'20px'}
const ulStyle = {'margin-left': '40%'}


class GuestNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <nav className="navbar navbar-default" style={NavStyle}>
            <img src="http://i.imgur.com/I46NBoI.png" className="img-rounded, center-block" style={Style}/>

                        <div className="navbar-brand">

                        </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav" style={ulStyle}>
                            <li>
                                <Link to="users/login">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to="users/new">
                                    New Account
                                </Link>
                            </li>
                        </ul>
                    </div>
            </nav>
            </div>
        );
    }
}

export default GuestNav;

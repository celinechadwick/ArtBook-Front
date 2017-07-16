import React, { Component } from "react";
import { Link, browserHistory } from "react-router";
const Style = {width:'200', height:'200', padding:'20px'};
const NavStyle = {'background-color':'white', margin:'20px'}
const ulStyle = {'margin-left': '38%'}

class LoggedNav extends Component {
    constructor(props) {
        super(props);

    }

    handleLogout(event) {
        event.preventDefault();

        window.localStorage.removeItem("token");
        window.localStorage.removeItem("userID");

        browserHistory.push("/users/login");
    }

    render() {
        return (
            <nav className="navbar navbar-default" style={NavStyle}>
            <img src="http://i.imgur.com/I46NBoI.png" className="img-rounded, center-block" style={Style}/>
                <div className="container-fluid">
                    <div className="navbar-header">

                        <div className="navbar-brand">

                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav" style={ulStyle}>
                            <li>
                                <Link to={`/users/${window.localStorage.userID}`} >
                                    User Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/searches"  >
                                    Browse
                                </Link>
                            </li>
                            <li><Link onClick={this.handleLogout.bind(this)} to="#">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default LoggedNav;

import React, { Component } from "react";
import { Link, browserHistory } from "react-router";

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
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">

                        </button>
                        <div className="navbar-brand">
                            TVflix
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to={`/users/${window.localStorage.userID}`}>
                                    User Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/shows">
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

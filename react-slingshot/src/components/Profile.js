import React, { Component } from "react";
import {Link} from 'react-router'

class Profile extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
            <div className="container well small-container margin-top-20">
              Full Name: {this.props.user.first_name} {this.props.user.last_name}
              <br />
              Created Account: {this.props.user.created_at}
              <br />
              <Link to={`/users/${window.localStorage.userID}/edit`}>Edit Profile</Link>
            </div>

            </div>
        );
    }
}

export default Profile;

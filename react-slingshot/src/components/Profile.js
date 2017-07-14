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
              Full Name: {this.props.data.first_name} {this.props.data.last_name}
              <br />
              Created Account: {this.props.data.created_at}
              <br />
              <Link to={`/users/${this.props.data.id}/edit`}>Edit Profile</Link>
            </div>

            </div>
        );
    }
}

export default Profile;

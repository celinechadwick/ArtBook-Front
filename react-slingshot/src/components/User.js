import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Artworks from './Artworks'

import Profile from './Profile';


class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        axios
        .get(`https://project-4-back.herokuapp.com/users/${this.params.id}`, {
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        })
        .then((response) => {
            this.setState({
                user: response.data,
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }



    //I want to make sure I am not looping over ALL the components!!!
    render() {
      return (
        <div>
          <Nav />
          <Profile data={this.state.user} />

          <Artworks userID={this.props.params.id} />
          </div>
        );
    }
}

export default User;

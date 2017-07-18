import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Artworks from './Artworks'
import Constants from "../constants";
import Profile from './Profile';
const background = {'background-color': 'rgba(30,33,39,.85)'}


class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user:{}
        }
    }

    componentDidMount() {
        axios
        .get(`${Constants.BASE_URL}/users/${window.localStorage.userID}`, {
            headers: {
              "Authorization": `Token token=${window.localStorage.getItem("token")}`
            }
        })
        .then((response) => {
            this.setState({
                user: response.data
            });
            console.log(this.state)
        })
        .catch((err) => {
            console.log(err);
        });
        console.log(this.state)
    }



    //I want to make sure I am not looping over ALL the components!!!
    render() {
      return (
        <div style={background} >
          <Nav />
          <Profile user={this.state.user} />
          <Artworks userID={this.props.params.id} />


          </div>
        );
    }
}

export default User;

import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";
import Nav from './Nav';
import Constants from "../constants";
const background = {'background-color': 'rgba(30,33,39,.85)'}
const marginStyle = {'margin-top':'10px'}

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  componentWillMount() {
    if (window.localStorage.token) {
      browserHistory.push('/');
    }
  }

  handleSubmit(event) {
      event.preventDefault();
      axios.post(`${Constants.BASE_URL}/users/login`, {
        email: this.state.email,
        password: this.state.password
      })
        .then((response) => {
            const token = response.data.token;
            const userID = response.data.userID;
            console.log(response);
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("userID", userID);
            // console.log(window.localStorage);
            browserHistory.push("/");
        })
        .catch((err) => {
            console.log(err);
        });
  }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
            return (
                <div>
                <Nav />


                <div className="container well small-container margin-top-20">
                <h2 className="txt-center">Login</h2>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="bold">
                            Email
                        </div>
                        <div className="margin-top-10">
                            <input onChange={this.handleChange.bind(this)} name="email" type="email" className="form-control" />
                        </div>
                        <div className="bold margin-top-10">
                            Password
                        </div>
                        <div className="margin-top-10">
                            <input onChange={this.handleChange.bind(this)} name="password" type="password" className="form-control" />
                        </div>

                        <div className="margin-top-20 txt-center">
                            <button type="submit" className="btn btn-primary" style={marginStyle}>Submit </button>
                        </div>
                    </form>
                    <div style={marginStyle}>
                      <Link to="/Users/new">
                        Make An Account
                      </Link>
                    </div>
                  </div>
                </div>
            );
        }

}
    export default Login;

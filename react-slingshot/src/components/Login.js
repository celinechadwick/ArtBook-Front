import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";
import Nav from './Nav';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
            userData:[]
    };
  }

  componentWillMount() {
    if (window.localStorage.token) {
      browserHistory.push('/shows');
    }
  }

  handleSubmit(event) {
      event.preventDefault();
      axios.post("https://project-4-back.herokuapp.com/users/login", {
          user: this.state
      })
        .then((response) => {
            const token = response.data.token;
            const userID = response.data.userID;
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("userID", userID);
            browserHistory.push("/shows");
        })
        .catch((err) => {
            console.log(err);
        });
  }

    verifyForm(event) {
      console.log(event.target.value, event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
            return (
                <div>
                <Nav />

                <h2 className="txt-center">Login</h2>

                <div className="container well small-container margin-top-20">
                  <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="bold">
                            Email
                        </div>
                        <div className="margin-top-10">
                            <input onChange={this.verifyForm.bind(this)} name="email" type="email" className="form-control" />
                        </div>
                        <div className="bold margin-top-10">
                            Password
                        </div>
                        <div className="margin-top-10">
                            <input onChange={this.verifyForm.bind(this)} name="password_digest" type="password" className="form-control" />
                        </div>

                        <div className="margin-top-20 txt-center">
                            <button type="submit" className="btn btn-primary">Submit </button>
                        </div>
                    </form>
                    <div>
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

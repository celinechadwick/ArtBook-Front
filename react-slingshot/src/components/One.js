import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from 'axios';
import Login from "./Login"
import Constants from "../constants";
const floatRight = {'float':'right'}

class One extends Component {
    constructor(props) {
        super(props);
    }


    saveArtwork (artwork, event) {
        event.preventDefault();

        axios.post(`${Constants.BASE_URL}/users/${window.localStorage.userID}/artworks`, {
          artwork: {
            "image": this.props.artwork.webImage.url,
            "title": this.props.artwork.longTitle,
            "artist": this.props.artwork.principalOrFirstMaker,
            "category": "",
            "year": ""
          }
        }, {
            headers: {
                "Authorization": `Token token=${window.localStorage.getItem("token")}`
            },

        })
        .then(() => {
            browserHistory.push(`/users/${this.props.params.id}`);

        })
        .catch((err) => {
            console.log(err);
        });
    }


    // TO DO: Add artwork to the user profile using a button

    render() {
        return (
          <div className="container well small-container margin-top-20">
            <div className="row margin-top-20">
                <div className="col-sm-6">
                    {this.props.artwork.webImage ?
                      <img src={this.props.artwork.webImage.url} className="img-responsive" />
                    : ""}
                </div>
                <div className="col-sm-4">
                    <div>
                        <strong>{this.props.artwork.longTitle}</strong>
                    </div>
                    <div className="margin-top-10">
                       {this.props.artwork.principalOrFirstMaker}
                    </div>

                </div>
                <div className="col-sm-1" style={floatRight}>
                <Link onClick={this.saveArtwork.bind(this, this.props.artwork)} className="btn btn-danger">
                    <i className="glyphicon glyphicon-heart-empty"></i>
                </Link>

                </div>
                </div>


            </div>
        );
    }
}

export default One;

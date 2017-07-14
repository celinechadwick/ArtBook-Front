import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from 'axios';

class One extends Component {
    constructor(props) {
        super(props);
    }


    saveArtwork (artwork, event) {
        event.preventDefault();
        axios.post(`/users/${this.params.user_id}/artworks/new`, null, {
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        })
        .then(() => {
            browserHistory.push(`/users/${this.params.user_id}`);
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
                <div className="col-sm-3">
                    <img src={this.props.artwork.webImage.url} className="img-responsive" />
                </div>
                <div className="col-sm-6">
                    <div>
                        <strong>{this.props.artwork.longTitle}</strong>
                    </div>
                    <div className="margin-top-10">
                       {this.props.artwork.principalOrFirstMaker}
                    </div>

                </div>
                <div className="col-sm-3 txt-right">
                <Link onClick={this.saveArtwork.bind(this, this.props.artwork.webImage.url)} className="btn btn-danger">
                    <i className="glyphicon glyphicon-heart-empty"></i>
                </Link>

                </div>
                </div>


            </div>
        );
    }
}

export default One;
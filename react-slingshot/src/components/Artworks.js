//This method should be used to delete a artwork
import React, { Component } from "react";
import axios from "axios";
import { browserHistory } from "react-router";
import Artwork from './Artwork';

import Constants from "../constants";



class Artworks extends Component {
    constructor(props) {
        super(props);

        this.state = {
          artworks: []
        };
    }


  componentDidMount() {
      axios.get(`${Constants.BASE_URL}/users/${this.props.userID}/artworks`, {
        headers: {
          "Authorization": `Token token=${window.localStorage.getItem("token")}`

          }
        })
        .then((response) => {
          const artworks = response.data;

            this.setState({
                artworks: artworks
            });
            console.log(this.state);
        })
        .catch((err) => {
            console.log(err);
        });
        console.log(this.state)
    }

    destroyArtwork(id, event) {
      event.preventDefault();
        axios.delete(`${Constants.BASE_URL}/users/${this.props.userID}/artworks/${id}`, {
          headers: {
            "Authorization": `Token token=${window.localStorage.getItem("token")}`
            }

        })
        .then(() => {
      browserHistory.push(`${Constants.BASE_URL}/users/${this.props.userID}`);
      console.log(this.state);
      this.componentDidMount();
      // this.setState({
      //   artworks: this.state.artworks
      // })
      ;

      })
        .catch((err) => {
            console.log(err);
        });
    }


    render() {
        return (
          <div>
          { this.state.artworks.map((artwork, index) => {
                    return (
                        <Artwork key={index} artwork={artwork} destroyArtwork={this.destroyArtwork.bind(this, artwork.id)} />
                    );
                }) }

          </div>
        );
    }
}

export default Artworks;

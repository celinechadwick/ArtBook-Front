//This method should be used to delete a artwork
import React, { Component } from "react";
import axios from "axios";
import { browserHistory } from "react-router";
import Artwork from './Artwork';


class Artworks extends Component {
    constructor(props) {
        super(props);

        this.state = {
          artworks: {}
        };
    }


  componentDidMount() {
    console.log(this.props.userID);
      axios.get(`https://project-4-back.herokuapp.com/users/${this.props.userID}/artworks`, {
        headers: {
            "Authorization": window.localStorage.getItem("token")
          }
        })
        .then((response) => {
          const artworks = response.data;

            this.setState({
                artworks: artworks
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    destroyArtwork(index, id, event) {
        event.preventDefault();
        axios.delete(`https://project-4-back.herokuapp.com/users/${this.props.params.id}/artworks/${this.props.params.id}`)
        .then(() => {

      browserHistory.push("/users/this.props.params.id");

      this.setState({
        artworks: this.state.artworks
      });

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
                        <Artwork key={artwork.id} artwork={artwork} destroyArtwork={this.destroyArtwork.bind(this, index, artwork.user_id, artwork.id)} />
                    );
                }) }

          </div>
        );
    }
}

export default Artworks;

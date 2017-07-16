import React, { Component } from "react";
import axios from "axios";

import Nav from "./Nav";
import One from "./One";

import Constants from "../constants";
const style={'margin-top':'10px'}

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artworks: [],
            search: "",
            searchResult: null,
            user: []
        }
    }


    componentDidMount() {
        axios
        .get(`${Constants.BASE_URL}/searches`)

        .then((response) => {
            this.setState({
                artworks: response.data.artObjects
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

// What am I going to use for this search term?
    handleSubmit(event) {
        event.preventDefault();

        axios.get(`${Constants.BASE_URL}/searches?search=${this.state.search}`)
        .then((response) => {
            this.setState({
                artworks: response.data.artObjects
            });
          })
        .catch((err) => {
            console.log(err);
        });
    }

    handleChange(event) {
        console.log(event.target.name, event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }




    render() {
        return (
            <div>
                <Nav />
              <div className="container well small-container margin-top-20">
                <form onSubmit={this.handleSubmit.bind(this)}>
                   <div className="bold">
                       Search For Anything:
                   </div>
                   <div className="margin-top-10">
                       <input onChange={this.handleChange.bind(this)} name="search" type="text" className="form-control" />
                   </div>
                   <div className="margin-top-30 txt-center">
                       <button type="submit" className="btn btn-primary" style={style}> Search! </button>
                   </div>
                </form>
              </div>

              {this.state.searchResult ? <One key={this.state.searchResult.id} one={this.state.searchResult} /> : ""}

                  { this.state.artworks.map((artwork) => {
                      return (
                        <One key={artwork.id} artwork={artwork} />
                      );
                  }) }
              </div>
        );
    }
}
export default Index;

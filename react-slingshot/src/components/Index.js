import React, { Component } from "react";
import axios from "axios";

import Nav from "./Nav";
import Artwork from "./Artwork";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artwork: [],
            search: "",
            searchResult: null,
        }
    }


    componentDidMount() {
        axios
        .get(`https://project-4-back.herokuapp.com/searches`)
        .then((response) => {
            this.setState({
                artwork: response.data
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

// What am I going to use for this search term?
    handleSubmit(event) {
        event.preventDefault();
        let searchTerm = this.state.search;
        axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${searchTerm}`)
        .then((response) => {
          console.log(response.data);
            this.setState({
                searchResult: response.data,
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
                       Search for anything:
                   </div>
                   <div className="margin-top-10">
                       <input onChange={this.handleChange.bind(this)} name="search" type="text" className="form-control" />
                   </div>
                   <div className="margin-top-20 txt-center">
                       <button type="submit" className="btn btn-primary">Search! </button>
                   </div>
                </form>
              </div>

                {this.state.searchResult ? <Artwork key={this.state.searchResult.id} show={this.state.searchResult} /> : ""}

                { this.state.shows.map((show) => {
                    return (
                      <Artwork key={show.id} show={show} />
                    );
                }) }
            </div>
        );
    }
}

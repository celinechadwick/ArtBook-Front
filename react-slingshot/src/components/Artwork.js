import React, { Component } from "react";

class Artwork extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row margin-top-20">
                <div className="col-sm-3">
                    <img src={this.props.artwork.image} className="img-responsive" />
                </div>
                <div className="col-sm-6">
                    <div>
                        <strong>{this.props.artwork.title}</strong>
                    </div>
                    <div className="margin-top-10">
                        Year: {this.props.artwork.year}
                    </div>
                    <div>
                        Artist: {this.props.artwork.artist}
                    </div>
                </div>

                    <button onClick={this.props.destroyArtwork} className="btn btn-danger margin-left-5">
                        <i className="fa fa-remove"></i>
                    </button>
                </div>
        );
    }
}

export default Artwork;

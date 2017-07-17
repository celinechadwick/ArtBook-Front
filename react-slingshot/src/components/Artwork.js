import React, { Component } from "react";
const style={'margin':'20px'}

class Artwork extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="container well small-container margin-top-20">
            <div className="row margin-top-20">
                <div className="col-sm-3" style={style}>
                    <img src={this.props.artwork.image} className="img-responsive" />
                </div>
                <div className="col-sm-6">
                    <div>
                        <strong>{this.props.artwork.title}</strong>
                    </div>

                    <div>
                        Artist: {this.props.artwork.artist}
                    </div>
                </div>

                    <button onClick={this.props.destroyArtwork} className="btn btn-danger margin-left-5">
                        <i className="glyphicon glyphicon-remove"></i>
                    </button>
                </div>
                </div>
        );
    }
}

export default Artwork;

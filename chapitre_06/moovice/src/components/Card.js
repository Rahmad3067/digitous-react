import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

class Card extends Component {
    render() {
        return (
            <div className='row' onClick={this.props.onClick}>
                <div className="col-sm-6">
                <img src={"https://image.tmdb.org/t/p/w300" +this.props.poster_path} alt="" />
                <p>Title: {this.props.title}</p>
                <p>Release date : {this.props.release_date}</p>
                <p>Description : {this.props.overview}</p>

                </div>
                
            </div>
        )
    }
}

export default Card

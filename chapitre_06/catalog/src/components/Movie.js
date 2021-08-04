import React from "react";
import movies from "../file.json";

class Movie extends React.Component {



    render() {

        const currentMovie = movies.find(elem => {
            return (parseInt(this.props.match.params.id) === elem.id)
        })
        
        return (


            <div>
                <p>Title : {currentMovie.title}</p>
                <p>Director : {currentMovie.director}</p>
                <p>Stars : {currentMovie.stars}</p>
                <p><img src = {currentMovie.image} alt="movice"/></p>
                <p>Description : {currentMovie.description}</p>
            </div >

        );
    }
}

export default Movie;

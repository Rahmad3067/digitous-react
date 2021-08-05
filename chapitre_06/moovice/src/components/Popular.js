import React, { Component } from 'react'
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css";

class Popular extends Component {
    constructor (){
        super()
        this.state = {
            movies: [],

        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a2ad7a0573c9cad03df7ada3dcefa35f")
        .then((res) => res.json())
        .then((data)=> {
    
          this.setState({
            movies: data.results
          })
        });
    }

    

    render() {
        return (
            <div className='d-flex'>
                <ul>
                    {this.state.movies.map((movie) => {
                        const movieLink = "https://image.tmdb.org/t/p/w300/"
                        return <li>
                            <Card
                                poster_path={movieLink + movie.poster_path}
                                title={movie.title}
                                release_date={movie.release_date}
                                overview={movie.overview}
                            />
                        </li>
                    })}
                </ul>
                
                
                
            </div>
        )
    }
}

export default Popular

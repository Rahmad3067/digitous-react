import React, { Component } from 'react'
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css";

class PopularBattle extends Component {
    constructor (){
        super()
        this.state = {
            movies: [],
            currentBattle: 0,
            favorites: [],

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

    handleClick = ((id) => {
        this.setState((prevState)=>{
            return{
                ...prevState,
                currentBattle: prevState.currentBattle + 2,
                favorites: [...prevState.favorites,id]
            }
        })
    })




    render() {
        console.log(this.state.favorites)
        return (
            <div className='row'>
                <div className="col">
                <ul>
                    
                    {this.state.movies.slice(this.state.currentBattle, this.state.currentBattle+2).map((movie)=>{
                        const movieLink = "https://image.tmdb.org/t/p/w300/"
                        return <li>
                            <Card onClick={() => this.handleClick(movie.id)} 
                                poster_path={movieLink + movie.poster_path}
                                title={movie.title}
                                release_date={movie.release_date}
                                overview={movie.overview}
                            />
                        </li>
                    })}
                    
                </ul>

                </div>
                
            </div>
        )
    }
}

export default PopularBattle;


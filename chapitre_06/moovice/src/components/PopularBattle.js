import { useState, useEffect } from "react"
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css";

 const PopularBattle = () => {

    const [movies, setMovies] = useState([]);
    const [currentBattle, setCurrentBattle] = useState(0);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a2ad7a0573c9cad03df7ada3dcefa35f")
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
            setMovies(data);
            // eslint-disable-next-line 
          })
      }, []);

      useEffect(() => {
		console.log(movies);
		console.log(favorites);
	}, [movies, favorites]);

    

    const handleClick = ((id) => {
           
            setCurrentBattle(currentBattle + 2)
            setFavorites(favorites,id)

        })

        console.log(favorites)
        return (
            console.log(setMovies)
                <ul>
                    {movies.slice(currentBattle, setCurrentBattle).map((movie)=>{
                        const movieLink = "https://image.tmdb.org/t/p/w300/"
                        return <li>
                            <Card className='d-flex container' onClick={() => this.handleClick(movie.id)} 
                                poster_path={movieLink + movie.poster_path}
                                title={movie.title}
                                release_date={movie.release_date}
                                overview={movie.overview}
                            />
                        </li>
                    })}
                    
                </ul>
        )

}
export default PopularBattle;


import React from "react";
import movies from "../file.json";
import { Link } from "react-router-dom";
class Home extends React.Component {
    render() {
        return(
            <div>
            <h1>Home</h1>
            <ul>
                {movies.map(elem => {
                    return <li><Link to = {'/' + elem.id}> {elem.title} </Link></li>
                }
                )}
            </ul>

            </div>
        )
    }     
}
export default Home;


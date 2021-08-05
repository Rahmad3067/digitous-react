import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-dark bg-dark'>
                <li><Link to="/Weekly">Weekly</Link></li>
                <li><Link to="/WeeklyBattle">Weekly-Battle</Link></li>
                <li><Link to="/Popular">Popular</Link></li>
                <li><Link to="/PopularBattle">Popular-Battle</Link></li>
                <li><Link to="/Favorites">Favorites</Link></li>
                </nav>
            </div>
        )
    }
}

export default Home

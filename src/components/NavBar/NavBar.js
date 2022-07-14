import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

    return <div className="navbar">
        <Link className="navbar-link" to='/'>
            <p>Home</p>
        </Link>
        <Link  className="navbar-link" to='kujni'>
            <p>Kujni</p>
        </Link>
        <Link className="navbar-link" to='plakari'>
            <p>Plakari</p>
        </Link>
        <Link className="navbar-link" to='tv-komodi'>
            <p>TV Komodi</p>
        </Link>
    </div>
}

export default NavBar
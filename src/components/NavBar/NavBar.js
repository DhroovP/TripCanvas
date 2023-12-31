import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;

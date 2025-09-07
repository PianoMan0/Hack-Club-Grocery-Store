import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Grocery Store</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
            <Link to='/home'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/about'>about</Link>
            </nav>

          <p>Common Header</p>

            
        </div>
    );
};

export default Header;
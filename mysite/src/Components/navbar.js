import './navbar.css'
import './templogo.png'
import React from 'react'
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="header">
            <Link to='/'><img src='./templogo.png' alt=''></img></Link>
            <ul className = 'nav-menu'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className="hamburger">
                <FaBars size={35} style={{color: '#fff'}}/>
            </div>
        </div>
    )
};

export default Navbar;
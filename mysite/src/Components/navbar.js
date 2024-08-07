import './navbar.css'
import './templogo.png'
import React from 'react'

import linkedIn from './icons/linkedin.svg'

import {useState, useEffect} from 'react'
import { List, ListIcon, ListItem, Button, Link, Image} from '@chakra-ui/react';

const Navbar = () => {
    const [activeLink, SetActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const updateActiveLink = (value) => {
        SetActiveLink(value);
    }

    return (
        <nav className={scrolled ? "scrolled":""}>
            <ul className = 'nav-menu'>
                <p className='name'>Milton Morris</p>
                <li><Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Link></li>
                <li><Link href='#about' className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('about')}>about</Link></li>
                <li><Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projects')}>projects</Link></li>
                <li><Link href='#contact' className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('contact')}>contact</Link></li>
                <div className="socials">
                    <a href='https://www.linkedin.com/in/morris22/'><Image borderRadius='full' boxSize='30px' src={linkedIn} alt='Link to my LinkedIn' /></a>
                    <Button className='resume' onClick={() => console.log('clicked')}>Resume</Button>
                </div>
            </ul>
        </nav>
    )
};

export default Navbar;
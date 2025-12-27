import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css'


const Navbar = () => 
{

    return(
        <nav className="nav">
            <a href="/" className="site-title">Ekansh</a>

            <ul>
                <li>
                    <a href='/' className='links'>Home</a>
                </li>

                <li>
                    <a href='/about-me' className='links'>About Me</a>
                </li>

                <li>
                    <a href='/work-experience' className='links'>Work Experience</a>
                </li>

                <li>
                    <a href='/projects' className='links'>Projects</a>
                </li>

                <li>
                    <a href='/certifications' className='links'>Certifications</a>
                </li>

                <li>
                    <a href='/contact' className='links'>Contact</a>
                </li>

            </ul>


        </nav>
    );
};


export default Navbar;
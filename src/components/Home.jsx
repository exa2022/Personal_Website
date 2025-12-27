import React from "react";
import {Link} from "react-router-dom";

import './Home.css';
import photo from '../img/photo2.png';
import 'font-awesome/css/font-awesome.min.css';

const Home = () =>
{
    return(
        <div className="home-container">
            
            <div className="circle-container">
                <img src={photo} className="circle-photo"/>
            </div>

            <div className="right-side">
                <h2>Welcome to my world</h2>
                <h1>Howdy! I'm Ekansh.</h1>
                <h3>Computer Science Honors student @ Texas A&M</h3>

                <Link to='/about-me'>
                    <button className="home-button">More About Me</button>
                </Link>

                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/ekansh-agrawal-18743b264/">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>

                    <a href="https://github.com/exa2022">
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>

                    

                </div>
            </div>
            
        </div>
        
    );
};


export default Home;

import React from "react";

import './AboutMe.css';
import photo from '../img/photo.JPG';

const AboutMe = () =>
{
    return(
        <div className="about-me-container">
            

            <div className="left">
                <img src={photo} className="ph"/>
            </div>


            <div className="right">
                <h1>ABOUT ME</h1>

                <div className="intro">
                    <h3>Hey there! My name is Ekansh and I am currently a Sophomore at Texas A&M University, pursuing
                        a major in CS and a minor in Statistics. I'm a part of the Engineering Honors Executive
                        Committee as well. I've been programming for the last 5+ years and am fluent in a variety
                        of languages such as C/C++, Java, Python, React, Django Rest Framework (DRF), RESTFul APIs, etc.
                        Throughout my journey in CS, I've worked on personal projects, taken role in SWE internships, and 
                        have developed multiple software applications for organizations. I’m particularly interested about the 
                        intersection of technology and innovation and am eager to explore the various avenues in the 
                        growing fields of ML/AI. At A&M, I'm also a part of various clubs such as TAMU Robomasters, ACC, ARP, &
                        Table Tennis club.
                    </h3>
                </div>

            </div>
            

        </div>    
    );
};


export default AboutMe;

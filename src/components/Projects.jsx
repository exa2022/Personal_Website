import React, {useState} from "react";

import './Projects.css';


const WorkExperience = () =>
{
    const [activateCard, setActivateCard] = useState(null);

    const toggleDescription = (index) =>
    {
        if(activateCard == index)
        {
            setActivateCard(null);
        }
        else
        {
            setActivateCard(index);
        }
    }






    return(
        <div className="project-container">
            
            
            <h1 className="project">Recent Projects</h1>


            <div className="proj_row">

                <div className={`card ${activateCard === 0 ? 'open': ''}`}>

                    {/* <button className="close-btn" onClick={()=>toggleDescription(0)}>&#10005;</button> */}
                    <h2 className="proj-card-title">ASLify - ASL Language Translator</h2>

                    <h3 className="dat2">
                        <span className="dat">Dates:</span> Oct 2024
                    </h3>

                    <span className="toggle-btn" onClick={() => toggleDescription(0)}>
                        {activateCard === 0 ? '-' : '+'}
                    </span>

                    <p className={`proj-description ${activateCard === 0 ? 'show' : ''}`}>As part of the 
                        Tidal Hackathon last semester, we 
                        built an ASL detection model using technologies such as OpenCV Hand 
                        Tracking Modules, NumPy, TensorFlow, Keras (Sequential Model), etc. 
                        We trained our model on a sample of 200+ images collected from a set 
                        of 20+ widely used hand signs/gestures.

                    </p>

                    <a href="https://github.com/exa2022/ASLify" className={`github-description ${activateCard === 0 ? 'show' : ''}`}>
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>

                    
                    
                </div>


                <div className={`card ${activateCard === 1 ? 'open': ''}`}>

                    {/* <button className="close-btn" onClick={()=>toggleDescription(1)}>&#10005;</button> */}
                    <h2 className="proj-card-title">AggiExplorer</h2>
                    
                    <h3 className="dat2">
                        <span className="dat">Dates:</span> Jan 2023
                    </h3>

                    <span className="toggle-btn" onClick={() => toggleDescription(1)}>
                        {activateCard === 1 ? '-' : '+'}
                    </span>

                    <p className={`proj-description ${activateCard === 1 ? 'show' : ''}`}>This semester, I participated 
                        in the Spring TAMU Hackathon, a 24-hour event in which my team and I successfully created 
                        and developed a full-stack web application called AggiExplore. This platform provides useful 
                        information about campus events, clubs, resources, etc. Some of the technologies that 
                        were used in building this web application include HTML/CSS, JavaScript, and 
                        Django(a Python-oriented database framework). Overall, it was a great learning 
                        experience for me, and I truly hope to compete in future hackathons!
                    </p>

                    <a href="https://github.com/exa2022/TAMUHACK-aggiExplorerApp" className={`github-description ${activateCard === 1 ? 'show' : ''}`}>
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>

                </div>


                <div className={`card ${activateCard === 2 ? 'open': ''}`}>
                    {/* <button className="close-btn" onClick={()=>toggleDescription(2)}>&#10005;</button> */}

                    <h2 className="proj-card-title">TAMIDS - Global Commodity Explorer</h2>

                    <h3 className="dat2">
                        <span className="dat">Dates:</span> Nov 2024
                    </h3>

                    <span className="toggle-btn" onClick={() => toggleDescription(2)}>
                        {activateCard === 2 ? '-' : '+'}
                    </span>

                    <p className={`proj-description ${activateCard === 2 ? 'show' : ''}`}>As part of the TAMU 
                        Datathon last semester, me and my team worked on the TAMIDS project, wherein we
                        used various global price production datasets containing commodities such as cotton, corn, wheat
                        to create a cost prediction analyzer model using SKLearn and Linear Regression models. We 
                        also used matplotlib to create pictorial representations of our data. Along with using ML, we also 
                        implemented a friendly user-interactive platform for users to select and analyze trends in 
                        commodity prices.
                    </p>

                    <a href="https://github.com/exa2022/TAMIDS" className={`github-description ${activateCard === 2 ? 'show' : ''}`}>
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>

                </div>

                <div className={`card ${activateCard === 3 ? 'open': ''}`}>
                    {/* <button className="close-btn" onClick={()=>toggleDescription(2)}>&#10005;</button> */}

                    <h2 className="proj-card-title">Notes with Canvas</h2>

                    <h3 className="dat2">
                        <span className="dat">Dates:</span> Sept 2023 - Dec 2023
                    </h3>

                    <span className="toggle-btn" onClick={() => toggleDescription(3)}>
                        {activateCard === 3 ? '-' : '+'}
                    </span>

                    <p className={`proj-description ${activateCard === 3 ? 'show' : ''}`}>Developed a web application that allows users to manage their daily tasks and use other 
                            features such as uploading assignments from the Canvas dashboard, updating their custom calendar, 
                            etc. Some of the technologies that we used included VS Code, React, 
                            JavaScript, HTML, CSS. Although we heavily focused on the front-end 
                            development of this application, we hope to use MongoDB, a popular NoSQL 
                            database structure, to complete the back-end development of our website. 
                    </p>

                    <a href="https://github.com/brandonyuanCS/notes-with-canvas" className={`github-description ${activateCard === 3 ? 'show' : ''}`}>
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>

                </div>


                <div className={`card ${activateCard === 4 ? 'open': ''}`}>

                    {/* <button className="close-btn" onClick={()=>toggleDescription(3)}>&#10005;</button> */}
                    <h2 className="proj-card-title">Tactile VR</h2>
                    
                    <h3 className="dat2">
                        <span className="dat">Dates:</span> Jan 2024 - Present
                    </h3>

                    <span className="toggle-btn" onClick={() => toggleDescription(4)}>
                        {activateCard === 4 ? '-' : '+'}
                    </span>

                    <p className={`proj-description ${activateCard === 4 ? 'show' : ''}`}>I am a 
                        part of "OBS frame on screen Graphiti Display" group and working on 
                        this research initiative to create a graphic interface (using Tactile VR) 
                        that allows the blind population to complete basic tasks. Tactile VR is 
                        one of the most modern Virtual Reality (VR) technologies that deal with 
                        the touch senses in a digital environment.
                    </p>

                    <a href="https://github.com/exa2022" className={`github-description ${activateCard === 4 ? 'show' : ''}`}>
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>

                </div>

                <div className={`card ${activateCard === 5 ? 'open': ''}`}>
                    {/* <button className="close-btn" onClick={()=>toggleDescription(4)}>&#10005;</button> */}
                    <h2 className="proj-card-title">MyShop</h2>

                    <h3 className="dat2">
                        <span className="dat">Dates:</span> Jun 2023 - Aug 2023
                    </h3>

                    <span className="toggle-btn" onClick={() => toggleDescription(5)}>
                        {activateCard === 5 ? '-' : '+'}
                    </span>

                    <p className={`proj-description ${activateCard === 5 ? 'show' : ''}`}>Used an array of programming languages such as Python, JavaScript, HTML, and CSS; Used Django 
                            (Python-oriented) framework for backend-database. Some of the tabs included as part of this web 
                            app are "Home", "Signup", "Shop", "Contact Us", etc.; Currently using AWS Elastic Beanstalk, EC2, & 
                            User Access Management (UAM) applications for final web application deployment. This application consists of a User system, Product systems, Showcases, Webpages, etc.
                    </p>

                    <a href="https://github.com/exa2022/FullStack-Web-Dev-MyShop" className={`github-description ${activateCard === 5 ? 'show' : ''}`}>
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>

                </div>

            </div>

        </div>
        
    );
};


export default WorkExperience;

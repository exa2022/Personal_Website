import React, {useState} from "react";

import './WorkExperience.css';


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
        <div className="Work-container">
            
            
            <h1 className="work">Work Experience</h1>



            <div className="work_row">

                <div className={`card ${activateCard === 0 ? 'open': ''}`}>

                    {/* <button className="close-btn" onClick={()=>toggleDescription(0)}>&#10005;</button> */}
                    <h2 className="work-card-title">IIT Bombay</h2>

                    <h3 className="position">
                        <span className="pos">Position:</span> Software Development Engineer Intern
                    </h3>

                    <h4 className="date">
                        <span className="dat">Dates:</span> Nov 2024 - Present
                    </h4>

                    <span className="toggle-btn" onClick={() => toggleDescription(0)}>
                        {activateCard === 0 ? '-' : '+'}
                    </span>

                    <p className={`work-description ${activateCard === 0 ? 'show' : ''}`}>I'm currently a SDE @ a research lab at IIT Bombay.
                        Currently handling Payment Integration via Razorpay using technologies 
                        such as React Axios, DRF, RESTFul APIs. Also, working on frontend, creating multiple user
                        interactive screens.
                    </p>
                    
                    
                </div>


                <div className={`card ${activateCard === 1 ? 'open': ''}`}>

                    {/* <button className="close-btn" onClick={()=>toggleDescription(1)}>&#10005;</button> */}
                    <h2 className="work-card-title">TAMU Robomasters</h2>

                    <h3 className="position">
                        <span className="pos">Position:</span> Computer Vision Engineer
                    </h3>

                    <h4 className="date">
                        <span className="dat">Dates:</span> Sept 2024 - Present
                    </h4>

                    <span className="toggle-btn" onClick={() => toggleDescription(1)}>
                        {activateCard === 1 ? '-' : '+'}
                    </span>

                    <p className={`work-description ${activateCard === 1 ? 'show' : ''}`}>Currently working on the Auto Aim project
                        to detect various armor panels on the field using OpenCV & Python. 
                        Specifically, we are implementing Kalman Filters and other estimation 
                        algorithms to improve our current robot aiming model.
                    </p>

                </div>


                <div className={`card ${activateCard === 2 ? 'open': ''}`}>
                    {/* <button className="close-btn" onClick={()=>toggleDescription(2)}>&#10005;</button> */}

                    <h2 className="work-card-title">A&M - Dept. Of Math</h2>

                    
                    <h3 className="position">
                        <span className="pos">Position:</span> Student Grader/Assistant
                    </h3>

                    <h4 className="date">
                        <span className="dat">Dates:</span> Aug 2024 - Dec 2024
                    </h4>

                    <span className="toggle-btn" onClick={() => toggleDescription(2)}>
                        {activateCard === 2 ? '-' : '+'}
                    </span>

                    <p className={`work-description ${activateCard === 2 ? 'show' : ''}`}>Served as a 
                        Grader for MATH 251 - Engineering Mathematics III, where-in I was responsible for 
                        grading assignments/tests, maintaining scores, and helping students with any queries. 
                    </p>

                </div>


                <div className={`card ${activateCard === 3 ? 'open': ''}`}>

                    {/* <button className="close-btn" onClick={()=>toggleDescription(3)}>&#10005;</button> */}
                    <h2 className="work-card-title">VIBHA DALLAS</h2>

                    <h3 className="position">
                        <span className="pos">Position:</span> Mobile App Developer
                    </h3>

                    <h4 className="date">
                        <span className="dat">Dates:</span> Jul 2022 - Mar 2023
                    </h4>

                    <span className="toggle-btn" onClick={() => toggleDescription(3)}>
                        {activateCard === 3 ? '-' : '+'}
                    </span>

                    <p className={`work-description ${activateCard === 3 ? 'show' : ''}`}>Designed and developed a mobile app for 
                        a non-profit organization. This app would facilitate users 
                        to register, log in, view upcoming events, provide real-time feedback, 
                        and contribute donations; Used “Justinmind” tool for designing the UI 
                        and platforms like React, Firebase, and VSCode for front/back-end development.
                    </p>

                </div>

                <div className={`card ${activateCard === 4 ? 'open': ''}`}>
                    {/* <button className="close-btn" onClick={()=>toggleDescription(4)}>&#10005;</button> */}
                    <h2 className="work-card-title">Kumon Learning Center</h2>

                    <h3 className="position">
                        <span className="pos">Position:</span> Assistant Teacher
                    </h3>

                    <h4 className="date">
                        <span className="dat">Dates:</span> May 2022 - Mar 2023
                    </h4>

                    <span className="toggle-btn" onClick={() => toggleDescription(4)}>
                        {activateCard === 4 ? '-' : '+'}
                    </span>

                    <p className={`work-description ${activateCard === 4 ? 'show' : ''}`}>Taught Math & English to middle and 
                        high school students. Also, assisted the center manager in other
                        administrative tasks.
                    </p>

                </div>

            </div>

        </div>
        
    );
};


export default WorkExperience;

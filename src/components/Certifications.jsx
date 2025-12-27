import React, {useState} from "react";

import './Certifications.css';

import ibm_certificate from '../img/ibm_certificate.png';
import harvard_certificate from '../img/harvard_certificate.png';
import web_certificate from '../img/web_certificate.png';
import data_certificate from '../img/data_certificate.png';

const Certifications = () =>
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
        <div className="certification-container">
            
            
            <h1 className="cert">Certifications</h1>


            <div className="cert_row">

                <div className={`card ${activateCard === 0 ? 'open': ''}`}>

                    {/* <button className="close-btn" onClick={()=>toggleDescription(0)}>&#10005;</button> */}
                    <h2 className="cert-card-title">Introduction to DevOps</h2>

                    <h3 className="dat2">
                        <span className="dat">Dates:</span> Nov 2024
                    </h3>

                    <span className="toggle-btn" onClick={() => toggleDescription(0)}>
                        {activateCard === 0 ? '-' : '+'}
                    </span>


                    <img className={`cert-img ${activateCard === 0 ? 'show': ''}`}
                         src = {ibm_certificate} />
                    

                </div>


                <div className={`card ${activateCard === 1 ? 'open': ''}`}>

                    {/* <button className="close-btn" onClick={()=>toggleDescription(1)}>&#10005;</button> */}
                    <h2 className="cert-card-title">AI with Python</h2>
                    
                    <h3 className="dat2">
                        <span className="dat">Dates:</span> Jun 2024
                    </h3>

                    <span className="toggle-btn" onClick={() => toggleDescription(1)}>
                        {activateCard === 1 ? '-' : '+'}
                    </span>

                    <img className={`cert-img ${activateCard === 1 ? 'show': ''}`}
                         src = {harvard_certificate} />


                </div>


                <div className={`card ${activateCard === 2 ? 'open': ''}`}>
                    {/* <button className="close-btn" onClick={()=>toggleDescription(2)}>&#10005;</button> */}

                    <h2 className="cert-card-title">Full Stack Web Development</h2>

                    <h3 className="dat2">
                        <span className="dat">Dates:</span> Aug 2023
                    </h3>

                    <span className="toggle-btn" onClick={() => toggleDescription(2)}>
                        {activateCard === 2 ? '-' : '+'}
                    </span>

                    <img className={`cert3-img ${activateCard === 2 ? 'show': ''}`}
                         src = {web_certificate} />


                </div>

                <div className={`card ${activateCard === 3 ? 'open': ''}`}>
                    {/* <button className="close-btn" onClick={()=>toggleDescription(2)}>&#10005;</button> */}

                    <h2 className="cert-card-title">Machine Learning for Data Science</h2>

                    <h3 className="dat2">
                        <span className="dat">Dates:</span> Mar 2023
                    </h3>

                    <span className="toggle-btn" onClick={() => toggleDescription(3)}>
                        {activateCard === 3 ? '-' : '+'}
                    </span>

                    <img className={`cert3-img ${activateCard === 3 ? 'show': ''}`}
                         src = {data_certificate} />
                

                </div>

            </div>

        </div>
        
    );
};


export default Certifications;

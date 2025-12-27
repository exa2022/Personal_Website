import React, {useState} from "react";

import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () =>
{
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    

    const handleNameChange = (e) =>
    {
        setName(e.target.value);
    }

    const handleEmailChange = (e) =>
    {
        setEmail(e.target.value);
    }

    const handleSubmitChange = (e) =>
    {
        setSubject(e.target.value);
    }

    const handleMessageChange = (e) =>
    {
        setMessage(e.target.value);
    }
    

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        const templateParams = 
        {
            name: name,         // User's name
            email: email,       // User's email
            subject: subject,   // User's subject
            message: message,   // User's message
        };

        emailjs.send("service_fpjwbji", "template_8ewuj2o", templateParams, "dPKsfZX5mYJsLuMMl")
        .then((response) => {
            console.log("Message sent successfully!", response);
            alert("Your message has been sent!");
        }, (error) =>
        {
            console.log("Error sending message:", error);
            alert("Sorry, message couldn't be sent");
        });

    };



    return(
        <div className="Contact-container">

            <h1>GET IN TOUCH</h1>

            <div className="mid-container">


                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label for="name">Name <span className="req">*</span></label>
                            
                        <div className='email-container'>

                            {/* <i className='fas fa-envelope email-icon'></i> */}
                            <input
                                value={name}
                                type='text'
                                name='email'
                                onChange={handleNameChange}
                                placeholder='Name'
                                required = 'true'
                            />

                        </div>

                        <label for="email">Email <span className="req">*</span></label>

                        <div className='password-container'>

                            {/* <i className='fa fa-lock lock-icon'></i> */}
                            <input 
                                value={email}
                                onChange={handleEmailChange}
                                type='email'
                                name='email'
                                placeholder="Email"
                                required='true'
                            />

                        </div>

                        <label for="email">Subject <span className="req">*</span></label>

                        <div className='password-container'>

                            {/* <i className='fa fa-lock lock-icon'></i> */}
                            <input 
                                value={subject}
                                onChange={handleSubmitChange}
                                type='text'
                                name='subject'
                                placeholder="Subject"
                                required='true'
                            />

                        </div>

                        <label for="email">Message <span className="req">*</span></label>

                        <div className='password-container'>

                            {/* <i className='fa fa-lock lock-icon'></i> */}
                            <textarea 
                                value={message}
                                onChange={handleMessageChange}
                                name='message'
                                placeholder="Message"
                                required='true'
                            />

                        </div>


                        <div className='wrappy'>
                            <button className = "button1" type="submit">SUBMIT</button>
                        </div>


                    </form>
                </div>


                <div className="map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.701171081238!2d-96.99313992461543!3d32.906068277380314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c29eb55280d7d%3A0xf3f271b2ba3776ef!2s7252%20Ridgepoint%20Dr%2C%20Irving%2C%20TX%2075063!5e0!3m2!1sen!2sus!4v1736382406655!5m2!1sen!2sus" 
                        width="600" 
                        height="450" 
                        style={{"border":0}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>


        </div>
        
    );
};


export default Contact;

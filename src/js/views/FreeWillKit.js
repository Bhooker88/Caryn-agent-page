import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/FreeWillKit.css";
import '../../styles/CommonStyles.css';

const FreeWillKit = () => {
    // const calendlyLink = "https://calendly.com/thooker86/work-appointments";
    return (
        <div className="freewill-container">
            
            <h1>Secure Your Legacy with Our Free Will Kit</h1>
            <p>
                Preparing for the inevitable is crucial to ensure your final wishes are respected and executed. A will is essential for directing your assets and providing for your loved ones' future.
            </p>
            <p>
                Additionally, a living will ensures your healthcare wishes are followed in situations where you can't communicate. Appointing someone you trust to advocate for you can significantly ease your family's burden during challenging times.
            </p>
            <p>
                Consulting a lawyer for these documents can be expensive and time-consuming. Our Free Will Kit simplifies this process. By scheduling a meeting, we guide you step-by-step, saving time and money while providing peace of mind.
            </p>
            <div className="contact-info">
                <h2>Get Started Today</h2>
                <p>To receive your Free Will Kit and start the process, please contact Caryn:</p>
                <ul>
                <li><a href="mailto:carynlynne416@gmail.com?subject=Inquiry&body=Hi Caryn,">Email me</a> Use the link or send me an Email at carynlynne416@gmail.com</li>
                        <li>Phone- Call or Text : 989-737-0803</li>
                </ul>
                {/* <p>Or schedule a meeting directly:</p>
                <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Schedule A Meeting</a> */}
                <div className="navigation-back">
                <Link to="/" className="back-to-home">← Back to Home</Link>
            </div>
            </div>
        </div>
    );
};

export default FreeWillKit;
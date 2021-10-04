import React from 'react';
import './ContactUs.css'

const ContectUs = () => {
    return (
        <div>
            <div className="container form">
                <h1 className="ct-title">Get Intouch</h1>
                <p className="ct-text">Have a question or just want to say hi? We'd love to hear from you.</p>
                <div className="info">
                    <input className="input-name" type="text" placeholder="Your Name" />
                    <input className="input-email" type="text" placeholder="Your Email" />
                    <br />
                    <input className="input-subject" type="text" placeholder="Subject" />
                    <br />
                    <textarea name="" id="" cols="110" rows="10">Enter Your Massage</textarea>
                </div>
            </div>
        </div>
    );
};

export default ContectUs;
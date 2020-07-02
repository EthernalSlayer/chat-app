import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <img 
                className="avatar"
                src="https://randomuser.me/api/portraits/women/40.jpg" 
                alt="photo de profil"/>
            <div>
                <p className="name">Georgia Fletcher</p>
                <div className="status">
                    <div className="status-online"></div>
                    <p className="status-text">online</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
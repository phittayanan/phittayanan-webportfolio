// src/Contact.jsx
import React from 'react';
import './App.css'; // Ensure your CSS is being imported

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-container">
                {/* Left side */}
                <div className="contact-left">
                    <h2></h2>
                    <p>You can DM me na I love you muk.</p>
                    {/* Updated Contact Me button to include a mailto link */}
                    <a href="mailto:phittayanan9@gmail.com" className="cta-button">Contact Me</a>
                </div>
                {/* Right side */}
                <div className="contact-right">
                    <p>This is my contact na kub jub jub.</p>
                    <div className="contact-info">
                        <h3>Contact Me</h3>
                        <p>📞 099-616-1133</p>
                        <p>✉️ phittayanan9@gmail.com</p>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=100002561068288" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.youtube.com/watch?v=s6lZ_vsSjeE" target="_blank" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.instagram.com/mx.nxn9_/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

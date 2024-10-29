import React from 'react';
import './About.css';
import { FaBirthdayCake, FaMusic, FaCode, FaGamepad, FaPlane } from 'react-icons/fa'; // You can use any icon library
import profile from '/src/assets/BB73521F-E29C-4E9B-95A4-710BF574FC99.jpg';

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <div className="profile-picture">
                    <img src={profile} alt="Phittayanan"/>
                </div>
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>
                        "I am Nine, 19 years old, graduated from Chulabhorn Science School, Pathum Thani, and currently studying at KMUTT (King Mongkut's University of Technology Thonburi), Faculty of Engineering, majoring in Computer Engineering. I am passionate about research, innovation, and business."
                    </p>
                    <div className="additional-info">
                        <div className="info-item">
                            <FaBirthdayCake className="info-icon" />
                            <strong>Birthday:</strong> <span>October 26, 2005</span>
                        </div>
                        <div className="info-item">
                            <FaMusic className="info-icon" />
                            <strong>Hobbies:</strong> <span>Music, Coding, Gaming, Traveling, Drinking</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

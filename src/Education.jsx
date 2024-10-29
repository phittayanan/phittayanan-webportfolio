import React from 'react';
import './Education.css';
import KMUTTLogo from './assets/KMUTT_CI_Primary_Logo-Full-1200x1200.png';
import ChulabhornLogo from './assets/359706971_768631308389107_6903080074956017827_n.png';
import KornpitacksuksaLogo from './assets/images.jpg';

const Education = () => {
    return (
        <section id="education">
            <div className="container">
                <h2>Education</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="content">
                            <img src={KMUTTLogo} alt="King Mongkut's University Logo" className="timeline-logo" />
                            <div className="date">Current</div>
                            <h3>King Mongkut's University of Technology Thonburi</h3>
                            <p>Computer Engineering</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="content">
                            <img src={ChulabhornLogo} alt="Princess Chulabhorn Science High School Logo" className="timeline-logo" />
                            <div className="date">High School</div>
                            <h3>Princess Chulabhorn Science High School</h3>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="content">
                            <img src={KornpitacksuksaLogo} alt="Kornpitacksuksa School Logo" className="timeline-logo" />
                            <div className="date">Primary Education</div>
                            <h3>Kornpitacksuksa School</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

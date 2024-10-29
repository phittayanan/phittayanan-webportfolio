// Home.js
import React from 'react';
import './Home.css';
import profilePicture from './assets/FE13C557-8099-4B1E-AA9C-81A90795ABBA.jpg';

const Home = () => {
    return (
        <section id="home" className="home"> {/* Added id="home" */}
            <div className="landing-container">
                <div className="profile-picture-container">
                    <img src={profilePicture} alt="Profile" className="profile-picture" />
                </div>
                <div className="text-content">
                    <h1>My name is nine</h1>
                </div>
            </div>
        </section>
    );
};

export default Home;

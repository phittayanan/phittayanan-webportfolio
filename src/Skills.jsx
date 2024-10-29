import React from 'react';
import './Skills.css';
import { FaFlask, FaLaptopCode, FaRobot } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        {
            title: "Researcher and Developer",
            description: "Conducts research and develops innovative solutions across various domains, applying scientific methods and technical skills to drive advancements and create impactful results.",
            icon: <FaFlask size={40} color="#FFD700" />, // Gold icon color
            image: "src/assets/dow-61864548498-rd-shortmast.avif" // Updated path for consistency
        },
        {
            title: "Software Engineer",
            description: "Develops and maintains software applications by applying engineering principles to solve complex technical issues, enhancing functionality and user experience.",
            icon: <FaLaptopCode size={40} color="#FFD700" />,
            image: "src/assets/alberta-software-engineering-4x2.png"
        },
        {
            title: "AI Engineer",
            description: "Creates and implements sophisticated AI systems, utilizing machine learning models and algorithms to automate tasks and improve decision-making processes effectively.",
            icon: <FaRobot size={40} color="#FFD700" />,
            image: "src/assets/0276.jpg_wh300.jpg-e1652677128201.webp"
        }
    ];


    return (
        <section id="skills">
            <div className="skills-frame">
                <div className="skills-container">
                    <h2 className="skills-title">Skills</h2>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-icon">{skill.icon}</div>
                                <h3 className="skill-title">{skill.title}</h3>
                                <p className="skill-description">{skill.description}</p>
                                <img src={skill.image} alt={skill.title} className="skill-image" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
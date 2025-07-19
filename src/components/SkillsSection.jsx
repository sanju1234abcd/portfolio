import React, { useContext } from 'react';
import "./SkillsSection.css";
import "../App.css";
import { AppContext } from '../AppContext';

const SkillsSection = () => {

    const {dark,changeTheme} = useContext(AppContext)

    return (
        <section className="skills-section">
            <div className="skills-box autoDisplay">
                <img className={`skills-image ${dark ? 'skills-image-dark' : ''}`} src="/images/brain1111.png" alt="" />
                <div className="Designer">
                    <h1 className="gradient">Designer <i className='bx bx-laptop'></i></h1>
                    <p>I have expertise in HTML, CSS, JavaScript, and design tools like Figma and Adobe XD. My strength lies in blending aesthetics with functionality to create seamless user experiences.</p>
                </div>
                
                <div className="coder">
                    <h1 className="gradient">Coder <i className='bx bx-code-block'></i></h1>
                    <p>I’m skilled in HTML, CSS, JavaScript, and frameworks like React and Node.js. I also have experience with database management using MongoDB and MySQL.</p>
                </div>

                <div className="slider" reverse="true" style={{ '--width': '100px', '--height': '100px', '--quantity': '8' }}>
                    <div className="list">
                        <div className="item" style={{ '--position': 1 }}><img src="/images/1.png" alt=""/></div>
                        <div className="item" style={{ '--position': 2 }}><img src="/images/2.png" alt="" /></div>
                        <div className="item" style={{ '--position': 3 }}><img src="/images/3.webp" alt="" /></div>
                        <div className="item" style={{ '--position': 4 }}><img src="/images/4.webp" alt="" /></div>
                        <div className="item" style={{ '--position': 5 }}><img src="/images/5.png" alt="" /></div>
                        <div className="item" style={{ '--position': 6 }}><img src="/images/6.png" alt="" /></div>
                        <div className="item" style={{ '--position': 7 }}><img src={`/images/7${dark  ? '' :  '_light'}.png`} alt="" /></div>
                        <div className="item" style={{ '--position': 8 }}><img src="/images/8.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
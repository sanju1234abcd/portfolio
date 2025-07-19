import React, { useContext } from 'react';
import "./InfoSection.css";
import "../App.css";
import { AppContext } from '../AppContext';

const InfoSection = () => {

  const {dark} = useContext(AppContext)  
  return(  
    <section className="info-section">
        <h1 className="section-title autoDisplay">About Myself</h1>
        <div className="info-cards">
            <div className={`card ${dark ? '' :'light-info-back'}`}>
                <h1>Hi there, I'm Sanju</h1>
                <p>With 4 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic and responsive websites.</p>
                <img src="/images/grid1.png" alt="" />
            </div>
            <div className={`card ${dark ? '' :'light-info-back'}`}>
                <h1>Tech Stack</h1>
                <p>I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.</p>
                <img src="/images/grid2.png" alt="" />
            </div>
            <div className={`card ${dark ? '' :'light-info-back'}`}>
                <h1>I’m very flexible with time zone communications & locations</h1>
                <p>I'm based in India, West Bengal and open to remote work worldwide.</p>
                <video src="/videos/glob.mp4" autoPlay loop muted playsInline></video>
                <button><i className='bx bx-send'></i> Contact Me</button>
            </div>
            <div className={`card ${dark ? '' :'light-info-back'}`}>
                <h1>My Passion for Coding</h1>
                <p>I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.</p>
                <img src="/images/grid4.png" alt="" />
            </div>
        </div>
    </section>
  )
};

export default InfoSection;
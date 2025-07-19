import React, { useContext, useEffect, useRef } from 'react';
import './Hero.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AppContext } from '../AppContext';
import BlurText from "../components/BlurText";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  const {dark} = useContext(AppContext)

  const handleAnimationComplete = () => {
    
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
      })
        .from('.intro1', { opacity: 0, y: -20, duration: 0.6 })
        .from('.top-text', { opacity: 0, y: 30, duration: 0.6 }, '-=0.4')
        .from('.hero-img', { opacity: 0, scale: 0.9, duration: 1 }, '-=0.5')
        .from('.bottom-text', { opacity: 0, y: 30, duration: 0.6 }, '-=0.6')
        .from('.cta-buttons', { opacity: 0, y: 20, duration: 0.5 }, '-=0.6')
        .from('.loc',{ opacity: 0, duration: 0.5,delay: 0.1})
        .from('#_logo',{opacity: 0, duration: 0.5},'+=0.1');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <img id='_logo' src={`/images/name_logo${dark ? '_dark' :''}.png`} alt="" style={{height:'13vh',width:'8vw',position:'absolute',left:'0px',top:'0vh',objectFit:'contain'}}/>
      <div className="text-wrapper">
        <div className={`intro1 ${dark ? '' : 'light-text-hero'}`}>
          <BlurText
            text="👋 Hi, my name is Sanju and I am a freelancer"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />
        </div>
        <h1 className={`top-text ${dark ? '' : 'light-text-hero'}`}>Webdesigner</h1>

        {/* Image in between */}
        <div className="hero-img">
            <img src="/images/hero_pic.png" alt="" style={{height:'100%',width:'100%',objectFit:'fill'}}/>
        </div>
        <h1 className={`bottom-text outline ${dark ? '' : 'light-text-hero-outline'}`}>& Web Developer</h1>
        <span className='loc'>from West Bengal,India</span>
      </div>
      <div className="cta-buttons">
        <button>You need a designer</button>
        <button>You need a developer</button>
      </div>
    </div>
  );
};

export default Hero;

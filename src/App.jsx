import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContext, useEffect, useRef } from 'react';
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import './App.css';
import { AppContext } from './AppContext';
import DotGrid from './Dot';
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import SkillsSection from './components/SkillsSection';
import TextPressure from './components/TextPressure';

gsap.registerPlugin(ScrollTrigger);
export default function App() {
  
const {dark,changeTheme} = useContext(AppContext)

const skills = [
  {
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'ReactJS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'TailwindCSS',
    logo: './assets/TailwindCSSIcon.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Express',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Three.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
  },
  {
    name: 'GSAP',
    logo: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/gsap.svg',
  },
  {
    name: 'Framer',
    logo: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/framer.svg',
  },
];

  useEffect(() => {
  // Store references for cleanup
  const cards = [];
  let handleMove, handleLeave;
  const timeout = setTimeout(() => {

    document.querySelectorAll('.section').forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      });
    });

    gsap.utils.toArray('.section h2').forEach((heading) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: 'top 90%',
        },
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    // Tilt effect on project cards
    handleMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / rect.height) * 10;
      const rotateY = ((x - rect.width / 2) / rect.width) * -10;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.transition = 'transform 0.1s ease-out';
    };
    handleLeave = (e) => {
      e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
      e.currentTarget.style.transition = 'transform 0.3s ease-in-out';
    };
    document.querySelectorAll('.project-card').forEach((card) => {
      card.addEventListener('mousemove', handleMove);
      card.addEventListener('mouseleave', handleLeave);
      cards.push(card);
    });
  }, 0);


  // Proper cleanup
  return () => {
    clearTimeout(timeout);
    cards.forEach((card) => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleLeave);
    });
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

  return (
    <div className={`app ${dark ? '' : 'light'}`}>
      <div title={`switch to ${dark ? 'light' : 'dark'} mode`} style={{position:'fixed',left:'0px',top:'0px',zIndex:'9',width:'100%',height:'10vh',display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
        <label className="switch">
          <input type="checkbox" className="input__check" onClick={changeTheme}/>
          <span className="slider1"></span>
      </label>
      </div> 
      <DotGrid
    dotSize={3}
    gap={20}
    baseColor= {` ${dark ? '#443c3c' : '#c2bcbc'}`}
    activeColor='#5227FF'
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  > 

    <Hero/>
    
    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
      <InfoSection/>
    </div>

      <section className="education section" style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{width:'30%',fontWeight:'400'}}>
          <TextPressure
              text="Education"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor={ dark ? '#ffffff' :'black'}
              strokeColor="#ff0000"
              minFontSize={10}
            />
        </div>
        
        <p style={{color:`${dark ? '': 'rgb(37, 35, 35)'}`}}>I am currently pursuing Bacherlor's degree of Engineering from <a href="https://jadavpuruniversity.in/" style={{fontWeight:'900',color:'inherit'}}>Jadavpur University</a>, with a strong focus on web development, data structures, and AI. Throughout my academic journey, I have consistently maintained a solid academic record and actively participated in tech events, coding competitions, and project-based learning to enhance my practical skills.</p>
<div className="stepper-box" style={{boxShadow : `${dark ? 'inherit' : 'none'}`}}>
  <div className="stepper-step stepper-completed">
    <div className="stepper-circle">
      <svg
        viewBox="0 0 16 16"
        className="bi bi-check-lg"
        fill="currentColor"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
        ></path>
      </svg>
    </div>
    <div className="stepper-line"></div>
    <div className="stepper-content">
      <div className={`stepper-title ${dark ? '' : 'light-app-text'}`}>10th from metropolitan institution(main)</div>
      <div className="stepper-status">Completed</div>
      <div className={`stepper-time ${dark ? '' : 'light-app-text'}`}>2019</div>
    </div>
  </div>
  <div className="stepper-step stepper-completed">
    <div className="stepper-circle">
      <svg
        viewBox="0 0 16 16"
        className="bi bi-check-lg"
        fill="currentColor"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
        ></path>
      </svg>
    </div>
    <div className="stepper-line"></div>
    <div className="stepper-content">
      <div className={`stepper-title ${dark ? '' : 'light-app-text'}`}>12th from hare school</div>
      <div className="stepper-status">Completed</div>
      <div className={`stepper-time ${dark ? '' : 'light-app-text'}`}>2021</div>
    </div>
  </div>

  <div className="stepper-step stepper-active">
    <div className="stepper-circle" style={{backgroundColor:'white',border:'none'}}>
      <img style={{height:'100%',width:'100%',objectFit:'fill'}} src="https://www.gatewaytoeducation.com/public/upload/products/Jadavpur-University-72.webp" alt="" />
    </div>
    <div className="stepper-line"></div>
    <div className="stepper-content">
      <div className={`stepper-title ${dark ? '' : 'light-app-text'}`}>B.E from Jadavpur University</div>
      <div className="stepper-status">In Progress</div>
      <div className={`stepper-time ${dark ? '' : 'light-app-text'}`}>2022 - 2026</div>
    </div>
  </div>

</div>
      </section>

      <section className="skills section" style={{paddingTop:'0px'}}>
        <div style={{width:'30%',margin:'0% 35%'}}>
        <TextPressure
              text="Skills"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor={ dark ? '#ffffff' :'black'}
              strokeColor="#ff0000"
              minFontSize={10}
            />
          </div>
        <SkillsSection/>
      </section>

      <section className="projects section" style={{paddingTop:'0px'}}>
        <div style={{width:'30%',margin:'0% 35%',marginBottom:'1%'}}>
        <TextPressure
              text="Projects"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor={ dark ? '#ffffff' :'black'}
              strokeColor="#ff0000"
              minFontSize={10}
        />
        </div>
          <p style={{color: `${dark ? 'rgba(255, 255, 255, 0.66)' : 'rgb(59, 58, 58)'}`}}>I've worked on a variety of projects, from simple websites to complex web applications. Here are 3 of my favorites.</p>
        <div className="projects-grid">
            <div className={`project-card ${dark ? '' : 'light-app-project-card'}`} >
                <div className="card-image"><img src="/images/project_1.png" alt=""/></div>
                <div className="author" style={{paddingTop:'20px',color:`${dark ? 'white' : 'rgb(54, 54, 54)'}`,fontSize:'1rem'}}><span className="name">Video Streaming Platform </span></div>
                <div className="author"><span className="name">July</span> 2025</div>
                <div className="heading" style={{color:`${dark ? '' : 'black'}`}}> 
                  <span>a video streaming app like youtube with functionalities like auth,advanced video searching with filters, subscribtion, like, comment, video uploading, view count, playlist creation etc. it also supports bitrate streaming and a channel owner dashboard with subscribers count , video count etc. it also has activity section where users can see their watched videos and can also create playlists too.
                </span></div>
                <div className="category">
                  <div className="tech-tag">Reactjs</div>
                  <div className="tech-tag">Gsap</div>
                  <div className="tech-tag">NodeJS</div>
                  <div className="tech-tag">Express</div>
                  <div className="tech-tag">MongoAtlas</div>
                  <div className="tech-tag">Cloudinary</div>
                </div>
                <div className="button_to_website">
                  <div className="project_link" style={{color:`${dark ? '' : 'white'}`,backgroundColor:`${dark ? '' : 'rgb(41, 40, 40)'}`}}>
                    <AiFillGithub size={16} color={`${dark ? '' : 'white'}`}/>
                    <span><a href="https://github.com/sanju1234abcd/video_streaming_project_frontend" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'inherit'}}>Source(client)</a></span>
                  </div>
                  <div className="project_link" style={{color:`${dark ? '' : 'white'}`,backgroundColor:`${dark ? '' : 'rgb(41, 40, 40)'}`}}>
                    <AiFillGithub size={16} color={`${dark ? '' : 'white'}`}/>
                    <span><a href="https://github.com/sanju1234abcd/video_streaming_project_backend" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'inherit'}}>Source(server)</a></span>
                  </div>
                </div>
            </div>

            <div className={`project-card ${dark ? '' : 'light-app-project-card'}`}>
                <div className="card-image"><img src="/images/project_2.png" alt=""/></div>
                <div className="author" style={{paddingTop:'20px',color:`${dark ? 'white' : 'rgba(53, 52, 52, 1)'}`,fontSize:'1rem'}}><span className="name">Gaming Website </span></div>
                <div className="author"><span className="name">July</span> 2025</div>
                <div className="heading" style={{color:`${dark ? '' : 'black'}`}}> 
                  created a zentry inspired gaming website with seamless animations and beautiful,captivating UI . It is a frontend heavy project with cuttting edge animation , better typography so the users can have seamless experience while exploring the website.it provides a sleek UI across all devices, ensuring a captivating first impression for visitors.the tech stacks are used is ReactJS , TailwindCSS . 
                </div>
                <div className="category">
                  <div className="tech-tag">Reactjs</div>
                  <div className="tech-tag">TailwindCss</div>
                  <div className="tech-tag">Gsap</div>
                  <div className="tech-tag">Vercel</div>
                </div>
                <div className="button_to_website">
                  <div className="project_link" style={{color:`${dark ? '' : 'white'}`,backgroundColor:`${dark ? '' : 'rgb(41, 40, 40)'}`}}>
                    <AiOutlineGlobal size={16} color={`${dark ? '' : 'white'}`}/>
                    <span><a href="https://gaming-website-git-main-sanjus-projects-fbba4fc2.vercel.app" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'inherit'}}>Website</a></span>
                  </div>
                  <div className="project_link" style={{color:`${dark ? '' : 'white'}`,backgroundColor:`${dark ? '' : 'rgb(41, 40, 40)'}`}}>
                    <AiFillGithub size={16} color={`${dark ? '' : 'white'}`}/>
                    <span><a href="https://github.com/sanju1234abcd/gaming_website" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'inherit'}}>Source</a></span>
                  </div>
                </div>
            </div>

            <div className={`project-card ${dark ? '' : 'light-app-project-card'}`}>
                <div className="card-image"></div>
                <div className="author" style={{paddingTop:'20px',color:`${dark ? 'white' : 'rgb(54, 54, 54)'}`,fontSize:'1rem'}}><span className="name">hello </span></div>
                <div className="author"> By <span className="name">Abi</span> 4 days ago</div>
                <div className="heading" style={{color:`${dark ? '' : 'black'}`}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae natus enim, id aliquam veniam minima tempora recusandae quidem ab distinctio aperiam accusantium, animi magni voluptates, consequuntur facilis aut cupiditate corporis.
                </div>
                <div className="category">
                  <div className="tech-tag">reactjs</div>
                  <div className="tech-tag">tailwind css</div>
                  <div className="tech-tag">mongodb</div>
                  <div className="tech-tag">gsap</div>
                  <div className="tech-tag">express</div>
                  <div className="tech-tag">express</div>
                  <div className="tech-tag">express</div>
                </div>
                <div className="button_to_website">
                  <div className="project_link" style={{color:`${dark ? '' : 'white'}`,backgroundColor:`${dark ? '' : 'rgb(41, 40, 40)'}`}}>
                    <AiOutlineGlobal size={16} color={`${dark ? '' : 'white'}`}/>
                    <span>Website</span>
                  </div>
                  <div className="project_link" style={{color:`${dark ? '' : 'white'}`,backgroundColor:`${dark ? '' : 'rgb(41, 40, 40)'}`}}>
                    <AiFillGithub size={16} color={`${dark ? '' : 'white'}`}/>
                    <span>Source</span>
                  </div>
                </div>
            </div>
        </div>
      </section>
        
      <section className="contact section" >
        <h2>Contact me 11</h2>
        <p style={{color:`${dark ? '' : 'black'}`}}>Let's connect on any of the platforms below</p>
        <div>
<ul className="example-2">
  <li className="icon-content">
    <a
      href="https://www.linkedin.com/in/sanju-marik-832805350/"
      aria-label="LinkedIn"
      data-social="linkedin"
    >
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-linkedin"
        viewBox="0 0 16 16"
        xmlSpace="preserve"
      >
        <path
          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">LinkedIn</div>
  </li>
  <li className="icon-content">
    <a href="https://github.com/sanju1234abcd/" aria-label="GitHub" data-social="github">
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-github"
        viewBox="0 0 16 16"
        xmlSpace="preserve"
      >
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">GitHub</div>
  </li>
  <li className="icon-content">
    <a
      href="https://www.instagram.com/"
      aria-label="Instagram"
      data-social="instagram"
    >
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-instagram"
        viewBox="0 0 16 16"
        xmlSpace="preserve"
      >
        <path
          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">Instagram</div>
  </li>
  <li className="icon-content">
    <a href="https://youtube.com/" aria-label="Youtube" data-social="youtube">
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-youtube"
        viewBox="0 0 16 16"
        xmlSpace="preserve"
      >
        <path
          d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">Youtube</div>
  </li>
</ul>

        </div>
      </section>
      
      </DotGrid>
    </div>
  );
}

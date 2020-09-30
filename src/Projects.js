import React, {useEffect} from 'react'
import './Projects.css'
import Project from './Project'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import twitter from './twitter-clone.png';
import facebook from './facebook-clone.png';
import netflix from './netflix-clone.png';
import whatsapp from './whatsapp-clone.PNG';

gsap.registerPlugin(ScrollTrigger);

function Projects() {

// window.addEventListener('mouseover', (e) => console.log(e.target))

const projectBackground = (e) => {
  const projects = document.querySelector('.projects__background')
  const parent = e.target.parentNode.parentNode.parentNode
  if (parent.classList.contains("twitter")) {
    projects.style.backgroundImage = `url(${twitter})`
    projects.style.transition = `.3s ease !important`
  } else if (parent.classList.contains("netflix")){
    projects.style.backgroundImage = `url(${netflix})`
  } else if (parent.classList.contains("facebook")) {
    projects.style.backgroundImage = `url(${facebook})`
  } else if (parent.classList.contains("whatsapp")) {
    projects.style.backgroundImage = `url(${whatsapp})`
  }
  
}

const backgroundReset = () => {
  const projects = document.querySelector('.projects__background')
  projects.style.background = "none"
}

useEffect(() => {
  // gsap.to(".projects", 
  // {
  //   yPercent: 50,
  //   scrollTrigger: {
  //     trigger: ".projects",
  //     scrub: true
  //   }
  // })
})

  return (
    <div className="projects" id="projects">
      {/* <div className="projects__fade"></div> */}
      <div className="projects__background"></div>
      <div className="projects__container">
        <h2 className="projects__work">CHECK OUT SOME OF MY REACT WORK</h2>
        <h3>(Hover over each one for more details or simply click on one to go see the project in action!)</h3>
        <div className="projects__all">
          <div className="clip clip1 twitter" onMouseEnter={projectBackground} onMouseLeave={backgroundReset}>
            <Project
              image={twitter}
              link="https://twitter-clone-a3e1e.firebaseapp.com/"
              title="Twitter Clone" 
              desc="A clone of the popular social media platform Twitter"
            />
            <p>A clone of the popular social media platform Twitter</p>
            <div className="projects__mobileInfo">
              <p>A clone of the popular social media platform Twitter</p>
            </div>
          </div>    
          <div className="clip clip2 netflix" onMouseEnter={projectBackground} onMouseLeave={backgroundReset}>
            <Project
              image={netflix}
              link="https://netflix-clone-7387f.firebaseapp.com/"
              title="Netflix Clone" 
              desc="A clone of the popular streaming platform Netflix"
            />
            <p>A clone of the popular streaming platform Netflix</p>
            <div className="projects__mobileInfo">
              <p>A clone of the popular streaming platform Netflix</p>
            </div>
          </div>
          <div className="clip clip3 facebook" onMouseEnter={projectBackground} onMouseLeave={backgroundReset}>
            <Project
              image={facebook}
              link="https://facebook-clone-955e6.firebaseapp.com/"
              title="Facebook Clone" 
              desc="A clone of the popular social media platform Facebook"
            />
            <p>A clone of the popular social media platform Facebook</p>
            <div className="projects__mobileInfo">
              <p>A clone of the popular streaming platform Facebook</p>
            </div>
          </div>
          <div className="clip clip4 whatsapp" onMouseEnter={projectBackground} onMouseLeave={backgroundReset}>
            <Project
              image={whatsapp}
              link="https://whatsapp-clone-c2061.firebaseapp.com/"
              title="WhatsApp Clone" 
              desc="A clone of the popular social media platform WhatsApp"
            />
            <p>A clone of the popular social media platform WhatsApp</p>
            <div className="projects__mobileInfo">
              <p>A clone of the popular streaming platform WhatsApp</p>
            </div>
          </div>            
        </div>            
      </div>
    </div>
  )
}

export default Projects

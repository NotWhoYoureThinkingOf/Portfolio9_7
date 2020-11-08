import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import Project from "./Project";
import ecommerce from "./assets/ecommerce-store.PNG";
import facebook from "./assets/facebook-clone.PNG";
import netflix from "./assets/netflix-clone.PNG";
import slack from "./assets/slack-clone.PNG";
import whatsapp from "./assets/whatsapp-clone.PNG";

function Projects() {
  const projectBackground = (e) => {
    const projects = document.querySelector(".projects__background");
    const parent = e.target.parentNode.parentNode.parentNode;
    if (parent.classList.contains("slack")) {
      projects.style.backgroundImage = `url(${slack})`;
    } else if (parent.classList.contains("netflix")) {
      projects.style.backgroundImage = `url(${netflix})`;
    } else if (parent.classList.contains("facebook")) {
      projects.style.backgroundImage = `url(${facebook})`;
    } else if (parent.classList.contains("whatsapp")) {
      projects.style.backgroundImage = `url(${whatsapp})`;
    } else if (parent.classList.contains("ecommerce")) {
      projects.style.backgroundImage = `url(${ecommerce})`;
    }
  };

  const backgroundReset = () => {
    const projects = document.querySelector(".projects__background");
    projects.style.background = "none";
  };

  return (
    <div className="projects" id="projects">
      <div className="projects__background"></div>
      <div className="projects__container">
        <h2 className="projects__work">CHECK OUT SOME OF MY REACT WORK</h2>
        <h3>
          (Hover over each one for more details or simply click on one to go see
          the project in action!)
        </h3>
        <div className="projects__all">
          <div
            className="clip clip1 twitter"
            onMouseEnter={projectBackground}
            onMouseLeave={backgroundReset}
          >
            <Project
              image={slack}
              link="https://slack-clone-c936b.firebaseapp.com/room/45NU0001UTOxF2mR6If2"
              title="Slack Clone"
              desc="A clone of the popular social media platform Twitter"
            />
            <p>A clone of messaging platform Slack</p>
            <div className="projects__mobileInfo">
              <p>A clone of messaging platform Slack</p>
            </div>
          </div>
          <div
            className="clip clip2 netflix"
            onMouseEnter={projectBackground}
            onMouseLeave={backgroundReset}
          >
            <Project
              image={netflix}
              link="https://netflix-clone-7387f.firebaseapp.com/"
              title="Netflix Clone"
              desc="A clone of the popular streaming platform Netflix"
            />
            <p>A clone of streaming platform Netflix</p>
            <div className="projects__mobileInfo">
              <p>A clone of streaming platform Netflix</p>
            </div>
          </div>
          <div
            className="clip clip3 facebook"
            onMouseEnter={projectBackground}
            onMouseLeave={backgroundReset}
          >
            <Project
              image={facebook}
              link="https://facebook-clone-955e6.firebaseapp.com/"
              title="Facebook Clone"
              desc="A clone of the popular social media platform Facebook"
            />
            <p>A clone of social media platform Facebook</p>
            <div className="projects__mobileInfo">
              <p>A clone of social media platform Facebook</p>
            </div>
          </div>
          <div
            className="clip clip4 whatsapp"
            onMouseEnter={projectBackground}
            onMouseLeave={backgroundReset}
          >
            <Project
              image={whatsapp}
              link="https://whatsapp-clone-c2061.firebaseapp.com/"
              title="WhatsApp Clone"
              desc="A clone of the popular social media platform WhatsApp"
            />
            <p>A clone of messaging app WhatsApp</p>
            <div className="projects__mobileInfo">
              <p>A clone of messaging app WhatsApp</p>
            </div>
          </div>
          <div
            className="clip clip5 ecommerce"
            onMouseEnter={projectBackground}
            onMouseLeave={backgroundReset}
          >
            <Project
              image={ecommerce}
              link="https://ecommerce-store-25bd7.firebaseapp.com/"
              title="Ecommerce Store"
              desc="An ecommerce gaming news and shop website"
            />
            <p>An ecommerce gaming news and shop website</p>
            <div className="projects__mobileInfo">
              <p>An ecommerce gaming news and shop website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

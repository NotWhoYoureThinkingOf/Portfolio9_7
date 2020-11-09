import React, { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import Project from "./Project";
import ecommerce from "./assets/ecommerce-store.PNG";
import facebook from "./assets/facebook-clone.PNG";
import netflix from "./assets/netflix-clone.PNG";
import slack from "./assets/slack-clone.PNG";
import whatsapp from "./assets/whatsapp-clone.PNG";

function Projects() {
  const [hovered, setHovered] = useState(false);
  const [background, setBackground] = useState("");

  const projectBackground = (e) => {
    const projects = document.querySelector(".projects__background");
    const parent = e.target.parentNode.parentNode.parentNode;
    // if (parent.classList.contains("slack")) {
    //   projects.style.backgroundImage = `url(${slack})`;
    // } else if (parent.classList.contains("netflix")) {
    //   projects.style.backgroundImage = `url(${netflix})`;
    // } else if (parent.classList.contains("facebook")) {
    //   projects.style.backgroundImage = `url(${facebook})`;
    // } else if (parent.classList.contains("whatsapp")) {
    //   projects.style.backgroundImage = `url(${whatsapp})`;
    // } else if (parent.classList.contains("ecommerce")) {
    //   projects.style.backgroundImage = `url(${ecommerce})`;
    // }
    if (parent.classList.contains("slack")) {
      setBackground(`url(${slack})`);
    } else if (parent.classList.contains("netflix")) {
      setBackground(`url(${netflix})`);
    } else if (parent.classList.contains("facebook")) {
      setBackground(`url(${facebook})`);
    } else if (parent.classList.contains("whatsapp")) {
      setBackground(`url(${whatsapp})`);
    } else if (parent.classList.contains("ecommerce")) {
      setBackground(`url(${ecommerce})`);
    }

    setHovered(true);
  };

  const backgroundReset = () => {
    const projects = document.querySelector(".projects__background");
    projects.style.background = "none";
    setHovered(false);
  };

  const transitions = {
    duration: "0.2",
  };

  return (
    <div className="projects" id="projects">
      <motion.div
        className="projects__background"
        initial={{ backgroundImage: "" }}
        animate={{ backgroundImage: background }}
        exit={{ backgroundImage: "" }}
        transition={transitions}
      ></motion.div>
      <div className="projects__container">
        <h2 className="projects__work">CHECK OUT SOME OF MY REACT WORK</h2>
        <h3>
          (Hover over each one for more details or simply click on one to go see
          the project in action!)
        </h3>
        <div className="projects__all">
          <div
            className="clip clip1 slack"
            onMouseEnter={projectBackground}
            onMouseLeave={backgroundReset}
          >
            <Project
              image={slack}
              link="https://slack-clone-c936b.firebaseapp.com/room/45NU0001UTOxF2mR6If2"
              title="Slack Clone"
              desc="A clone of messaging platform Slack"
            />
            <div className="project__info">
              <p>A clone of messaging platform Slack</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/slack-clone">
                Check out the code here
              </a>
            </div>
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
            <div className="project__info">
              <p>A clone of streaming platform Netflix</p>
            </div>
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
              desc="A clone of social media platform Facebook"
            />
            <div className="project__info">
              <p>A clone of messaging platform Facebook</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/fb-clone">
                Check out the code here
              </a>
            </div>
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
            <div className="project__info">
              <p>A clone of messaging platform Facebook</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/whatsapp-clone">
                Check out the code here
              </a>
            </div>
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
              title="Ecommerce Website"
              desc="An ecommerce gaming news and shop website"
            />
            <div className="project__info">
              <p>An ecommerce gaming news and shop website</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/ecommerce-store">
                Check out the code here
              </a>
            </div>
            <div className="projects__mobileInfo">
              <p>An ecommerce gaming news and shop website</p>
            </div>
          </div>
        </div>

        <div className="projects__allMobile">
          <div className="projects__projectMobile">
            <Project
              image={ecommerce}
              link="https://ecommerce-store-25bd7.firebaseapp.com/"
              title="Ecommerce Website"
              desc="An ecommerce gaming news and shop website"
            />
            <div className="project__mobileinfo">
              <p>An ecommerce gaming news and shop website</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/ecommerce-store">
                Check out the code here
              </a>
            </div>
          </div>
          <div className="projects__projectMobile">
            <Project
              image={netflix}
              link="https://netflix-clone-7387f.firebaseapp.com/"
              title="Netflix Clone"
              desc="A clone of streaming platform Netflix"
            />
            <div className="project__mobileinfo">
              <p>A clone of streaming platform Netflix</p>
            </div>
          </div>
          <div className="projects__projectMobile">
            <Project
              image={facebook}
              link="https://facebook-clone-955e6.firebaseapp.com/"
              title="Facebook Clone"
              desc="A clone of social media platform Facebook"
            />
            <div className="project__mobileinfo">
              <p>A clone of social media platform Facebook</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/fb-clone">
                Check out the code here
              </a>
            </div>
          </div>
          <div className="projects__projectMobile">
            <Project
              image={whatsapp}
              link="https://whatsapp-clone-c2061.firebaseapp.com/"
              title="Whatsapp Clone"
              desc="A clone of messaging app Whatsapp"
            />
            <div className="project__mobileinfo">
              <p>A clone of messaging app Whatsapp</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/whatsapp-clone">
                Check out the code here
              </a>
            </div>
          </div>
          <div className="projects__projectMobile">
            <Project
              image={slack}
              link="https://slack-clone-c936b.firebaseapp.com/room/45NU0001UTOxF2mR6If2"
              title="Slack Clone"
              desc="A clone of messaging platform Slack"
            />
            <div className="project__mobileinfo">
              <p>A clone of messaging platform Slack</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/slack-clone">
                Check out the code here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

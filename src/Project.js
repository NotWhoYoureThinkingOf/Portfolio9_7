import React from "react";
import "./Project.css";

function Project({ title, image, desc, link }) {
  return (
    <div className="project">
      <a href={link} className="project__container">
        <img src={image} alt="" />
        <div className="project__info">
          <p>{desc}</p>
        </div>
      </a>
    </div>
  );
}

export default Project;

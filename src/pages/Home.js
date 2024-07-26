import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="container mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="page-header">About Me</h1>
        <div className="text-base space-y-1">
          <p>
            I'm an undergraduate at MIT studying computer science. I'm interested in
            machine learning, robotics, and education. At MIT, I'm involved in Arcturus, 
            MIT's competition marine robotics team, and Women in EECS. 
          </p>
          <p>
            This summer, I'm working as a Machine Learning Intern at{" "}
            <a
              className="paragraph-link"
              href="https://www.ema.co/"
            >
              Ema
            </a>
            .
          </p>
          <p>
            In my free time, I enjoy going on runs, journaling, and growing succulents.
          </p>
        </div>
      </div>
      <div className="space-y-4"> 
        <h1 className="page-header">Contact</h1>
        <div className="text-base space-y-1">
          <p>
            I would love to get to know you! Feel free to reach out.
          </p>
          <p className="flex space-x-4">
            <a
              className="paragraph-link flex items-center space-x-2"
              href="mailto:jcai18@mit.edu"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>jcai18@mit.edu</span>
            </a>
          </p>
          <p className="flex space-x-4">
            <a  
              className="paragraph-link flex items-center space-x-2"
              href="https://www.linkedin.com/in/janelle-cai/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>@janelle-cai</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
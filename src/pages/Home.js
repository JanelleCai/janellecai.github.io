import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Link({ text, link }) {
  return (
    <a
      className="paragraph-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
} 

function Home() {
  return (
    <div className="px-8">
      <div className="container mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="page-header">About Me</h1>
          <div className="text-base space-y-2">
            <p>
              Hello! I'm a sophomore at MIT studying computer science. Some of my current interests 
              are machine learning and robotics, but I'm always excited to learn new things. I'm 
              passionate about applying my knowledge to practical problems to make an impact. 
            </p>
            <p>
              This summer, I'm working on building LLM agents at{" "}
              <Link text="Ema" link="https://www.ema.co/"/>. 
              I'm also researching how we can apply NLP to climate policy in order to better 
              understand progress toward climate goals. 
              At MIT, I work on autonomous navigation and perception for {" "}
              <Link text="Arcturus" link="https://arcturus.mit.edu.com/"/>,
              our competition marine robotics team.
            </p>
            <p>
              Outside of academics, I enjoy going on runs and growing succulents. I also run 
              community events for {" "}<Link text="MIT Women in EECS" link="https://wieecs.mit.edu/"/>.
            </p>
          </div>
        </div>
        <div className="space-y-4"> 
          <h1 className="page-header">Contact</h1>
          <div className="text-base space-y-2">
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
    </div>
  );
}

export default Home;
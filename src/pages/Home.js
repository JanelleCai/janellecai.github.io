import React from "react";

function Home() {
  return (
    <div className="container pt-10 mx-8 space-y-8">
      <h1 className="text-3xl font-bold">janelle cai</h1>
      <div className="space-y-4">
        <h1 className="text-2xl">about me</h1>
        <div className="text-base space-y-1">
          <p>
            I'm an undergraduate at MIT studying computer science. I'm interested in
            machine learning, robotics, and education.{" "}
          </p>
          <p>
            This summer, I'm working as a Machine Learning Intern at{" "}
            <a
              className="inline hover:text-cyan-900 text-cyan-600 transition-all"
              href="https://www.ema.co/"
            >
              Ema
            </a>
            .
          </p>
          <p>
            In my free time, I enjoy going on runs.
          </p>
        </div>
      </div>
      <div className="space-y-4"> 
        <h1 className="text-2xl">contact</h1>
        <div className="text-base">
          would love to chat. reach me below.
          <br />
          <a
            className="inline hover:text-cyan-900 text-cyan-600 transition-all"
            href="mailto:jcai18@mit.edu"
          >
            email
          </a>{" "}
          <a
            className="inline hover:text-cyan-900 text-cyan-600 transition-all"
            href="https://www.linkedin.com/in/janelle-cai/"
          >
            linkedin
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;

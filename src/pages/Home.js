import React from "react";

function Home() {
  return (
    <div className="container mx-auto mt-4 text-left">
      <h1 className="text-3xl font-bold">Janelle Cai.</h1>
      <div className="text-base">
        I'm an undergraduate at MIT studying computer science. I'm interested in
        machine learning, robotics, and education.{" "}
      </div>
      <div className="text-base">
        This summer, I'm working as a Machine Learning Intern at{" "}
        <a
          className="inline hover: text-cyan-600 transition-all"
          href="https://www.ema.co/"
        >
          Ema
        </a>
        .
      </div>
      <div className="text-base">In my free time, I enjoy going on runs.</div>
    </div>
  );
}

export default Home;

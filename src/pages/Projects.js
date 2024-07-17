import React from 'react';
import Card from '../components/Card';

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "This is a description of Project 1.",
      links: [
        { text: "GitHub", url: "https://github.com/" }
      ]
    },
    {
      title: "Project 2",
      description: "This is a description of Project 2.",
      links: [
        { text: "GitHub", url: "https://github.com/" }
      ]
    },
    {
      title: "Project 3",
      description: "This is a description of Project 3.",
      links: [
        { text: "GitHub", url: "https://github.com/" }
      ]
    }
  ];

  return (
    <div className="container mx-auto mt-4 text-left">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
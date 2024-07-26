import React from 'react';
import Card from '../components/Card';

function Projects() {
  const projects = [
    {
      title: "NDC SDG",
      description: "This is a description of Project 1.",
      skills: ["Python", "Pandas", "Scikit-learn", "Flask"],
      links: [
        { text: "GitHub", url: "https://github.com/" }
      ]
    },
    {
      title: "Arcturus",
      description: "This is a description of Project 2.",
      skills: ["Python", "Pandas", "Scikit-learn", "Flask"],
      links: [
        { text: "GitHub", url: "https://github.com/" }
      ]
    },
    {
      title: "QP Realm",
      description: "This is a description of Project 2.",
      skills: ["Python", "Pandas", "Scikit-learn", "Flask"],
      links: [
        { text: "GitHub", url: "https://github.com/" }
      ]
    },
    {
      title: "Booksalotl",
      description: "This is a description of Project 2.",
      skills: ["Python", "Pandas", "Scikit-learn", "Flask"],
      links: [
        { text: "GitHub", url: "https://github.com/" }
      ]
    },
    {
      title: "Forest Carbon Estimation",
      description: "This is a description of Project 3.",
      skills: ["Python", "Pandas", "Scikit-learn", "Flask"],
      links: [
        { text: "GitHub", url: "https://github.com/" }
      ]
    }
  ];

  return (
    <div className="container mx-auto mt-4 text-left">
      <h1 className="page-header mb-6">Projects</h1>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            links={project.links}
            skills={project.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
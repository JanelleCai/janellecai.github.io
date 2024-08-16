import React from 'react';
import Card from '../components/Card';

function Projects() {
  const projects = [
    {
      title: "Climate Policy Research",
      description: "climate.md",
      skills: ["Python", "Natural Language Processing"],
      links: [
        { text: "Paper", url: "https://aclanthology.org/2024.climatenlp-1.17/" },
        { text: "Poster", url: "/projects/climatenlp.pdf" }
      ]
    },
    {
      title: "Arcturus",
      description: "arcturus.md",
      skills: ["Python", "C++", "ROS2", "OpenCV"],
      links: [
        { text: "GitHub (ROS2)", url: "https://github.com/ArcturusNavigation/all_seaing_vehicle" },
        { text: "GitHub (MOOS-IvP)", url: "https://github.com/ArcturusNavigation/moos-ivp-arcturus" }
      ]
    },
    {
      title: "Quadratic Programming Controllers",
      description: "qp.md",
      skills: ["Python", "JAX"],
      links: []
    },
    {
      title: "Booksalotl",
      description: "booksalotl.md",
      skills: ["Typescript", "React", "Node.js", "Express", "MongoDB"],
      links: [
        { text: "GitHub", url: "https://github.com/JanelleCai/booksalotl" }
      ]
    },
    {
      title: "Forest Carbon Estimation",
      description: "forest.md",
      skills: ["Python", "Geostatistical Modeling"],
      links: [
        { text: "GitHub", url: "https://github.com/dawsonc/forest_carbon_estimation" }
      ]
    }
  ];

  return (
    <div className="px-8">
      <div className="container mx-auto max-w-3xl">
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
    </div>
  );
}

export default Projects;
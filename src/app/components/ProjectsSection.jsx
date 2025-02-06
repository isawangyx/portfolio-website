"use client";

import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";

const ProjectsSection = () => {
  const ref = useRef(null);

  return (
    <section id="projects">
      <h2 className="text-4xl text-white font-bold text-center mb-6">
        My Projects
      </h2>

      <div className="py-8 px-4 xl:px-16">
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tags}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;

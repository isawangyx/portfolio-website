"use client";

import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";

const ProjectsSection = () => {
  const ref = useRef(null);

  return (
    <section id="projects">
      <div className="flex items-center justify-center gap-3 mb-6">
        <a
          href="/projects"
          className="flex items-center gap-2 hover:underline text-white"
        >
          <h2 className="text-4xl text-white font-bold">Projects</h2>
          <img
            src="/icons/arrow-right.svg"
            alt="arrow right"
            className="h-6 w-6"
          />
        </a>
      </div>

      <div className="py-8 px-4 xl:px-16">
        <ul ref={ref} className="flex flex-col gap-6">
          {projectsData.map((project) => (
            <li key={project.id} className="w-full">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;

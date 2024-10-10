"use client";

import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Meal Arrangement App - Let's Eat",
    description:
      "An app which allows NUS students to effortlessly coordinate meals with others. Technologies used: React Native, Firebase, Git",
    image: "/images/letseat.png",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);

  return (
    <section id="projects">
      <h2 className="text-center text-3xl font-bold text-white mt-4 mb-8 md:mb-12">
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
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;

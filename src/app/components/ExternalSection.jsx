"use client";

import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";

const externalsData = [
  {
    id: 1,
    title: "NUS Developer Group - Project Oscas",
    description:
      "Ongoing: This project aims to automate and streamline the processes of sponsorship, adoption, and volunteer management, reducing manual workloads and improving efficiency.",
    image: "/images/dscnus.png",
  },
  {
    id: 2,
    title: "NUS Computing StartIT",
    description: "Ongoing",
    image: "/images/startit.jpg",
  },
];

const ExternalSection = () => {
  const ref = useRef(null);

  return (
    <section id="external">
      <h2 className="text-center text-3xl font-bold text-white mt-4 mb-8 md:mb-12">
        External
      </h2>

      <div className="py-8 px-4 xl:px-16">
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {externalsData.map((project) => (
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

export default ExternalSection;

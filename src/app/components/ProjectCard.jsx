import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
      className="group"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col sm:flex-row w-full items-center hover:opacity-100 transition-all duration-300 sm:gap-8 sm:p-4 sm:hover:bg-white/5 rounded-lg"
      >
        <div className="w-full sm:w-1/2 flex flex-col gap-2 mb-4 sm:mb-0">
          <p className="text-sm opacity-50 hidden sm:block">
            {project.dateRange}
          </p>

          <div className="flex gap-1 flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              {project.title}
            </h2>
          </div>

          <p className="text-sm md:text-base">{project.description}</p>

          <div className="hidden sm:flex gap-0.5 items-center opacity-50 transition-all text-sm group-hover:opacity-100">
            <span className="font-light underline-offset-2">
              {project.link.replace("https://", "")}
            </span>
            <img src="/icons/outlink.svg" alt="External Link" className="w-4" />
          </div>
        </div>

        <div className="relative transition-all duration-300 group w-full sm:w-1/2">
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-48 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;

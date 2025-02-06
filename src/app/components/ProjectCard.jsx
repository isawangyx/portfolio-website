import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, imgUrl, tags = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, ease: "easeOut" }} 
      whileHover={{ scale: 1.05 }} 
      className="bg-[#655781] rounded-lg overflow-hidden shadow-lg text-white"
    >
      {/* Image Section */}
      <div
        className="h-32 md:h-40 rounded-t-lg"
        style={{
          background: `url(${imgUrl}) center center / cover no-repeat`,
        }}
      ></div>

      {/* Text Content Section */}
      <div className="p-6 flex flex-col justify-between">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-[#ADB7BE] text-base mb-4">{description}</p>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#6b6a6a] text-sm text-white px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

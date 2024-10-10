import React from "react";

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <div>
      <div
        className="h-60 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>

      <div className="text-white bg[#181818] py-6 px-4 rounded-b-xl">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#ADB7BE]">{description}</p>
        <a href></a>
      </div>
    </div>
  );
};

export default ProjectCard;

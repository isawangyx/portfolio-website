import React from "react";
import Image from "next/image";
import experiences from "../data/experiences";

const WorkExperience = () => {
  return (
    <section id="work">
      <div className="text-white py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience.
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 w-1 bg-gray-500 h-full"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="flex items-start mb-12 relative">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gray-700 flex justify-center items-center border-2 border-white relative z-10">
                {/* <Image
                src={experience.icon}
                alt={experience.title}
                width={40}
                className="w-10 h-10 rounded-full object-cover"
              /> */}
              </div>

              {/* Content */}
              <div className="ml-8 bg-[#282828] text-white p-6 rounded-lg shadow-lg relative">
                {/* Pointer */}
                <div className="absolute left-[-8px] top-6 w-4 h-4 bg-[#282828] transform rotate-45"></div>

                <h3 className="text-xl font-bold">{experience.title}</h3>
                <p className="text-sm text-gray-400">
                  {experience.institution}
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-300">
                  {experience.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-400 mt-4">{experience.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

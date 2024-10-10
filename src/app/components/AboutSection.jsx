import React from "react";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base lg:text-lg">
          I am a full stack developer with a passion for creating innovative and
          impactful technological solutions. I have experience working with
          JavaScript, React, Firebase, HTML, CSS, and Git. I am a curious and
          fast learner, and am always seeking for growth.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

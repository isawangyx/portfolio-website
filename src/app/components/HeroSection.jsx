import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 pb-20">
        <div className="col-span-7 place-self-center text-center">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
              Hi, I&apos;m{" "}
            </span>
            Isabel!
          </h1>
          <p className="text-white mb-10 text-lg lg:text-xl">
            A matcha-fueled CS major.
          </p>
          <a
            href="/Yanxiang_CV.pdf"
            download
            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
          >
            Download CV
          </a>
        </div>
        <div className="col-span-5 place-self-center"></div>
      </div>
    </section>
  );
};

export default HeroSection;

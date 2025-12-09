"use client";
import React from "react";
import Image from "next/image";

const Footer = ({ initials = "IW", fullName = "Isabel Wang" }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center py-4 mb-3">
      <a href="/" className="opacity-60 text-sm sm:text-base sm:hidden">
        &copy; {initials} {year}
      </a>
      <a href="/" className="opacity-60 text-sm hidden sm:block sm:text-lg">
        &copy; {fullName} {year}
      </a>
      <div className="flex gap-3 items-center">
        <a
          className="w-8 h-8 sm:w-10 sm:h-10 opacity-60 hover:opacity-100 transition-opacity duration-300"
          href="/Isabel_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/resume.svg"
            alt="Resume"
            width={40}
            height={40}
            className="w-full h-full"
          />
        </a>
        <a
          className="w-8 h-8 sm:w-10 sm:h-10 opacity-60 hover:opacity-100 transition-opacity duration-300"
          href="mailto:yanxiangw04@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/envelope.svg"
            alt="Email"
            width={40}
            height={40}
            className="w-full h-full"
          />
        </a>
        <a
          className="w-8 h-8 sm:w-10 sm:h-10 opacity-60 hover:opacity-100 transition-opacity duration-300"
          href="https://github.com/isawangyx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/github.svg"
            alt="GitHub"
            width={40}
            height={40}
            className="w-full h-full"
          />
        </a>
        <a
          className="w-8 h-8 sm:w-10 sm:h-10 opacity-60 hover:opacity-100 transition-opacity duration-300"
          href="https://www.linkedin.com/in/yanxiangwang04/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={40}
            height={40}
            className="w-full h-full"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

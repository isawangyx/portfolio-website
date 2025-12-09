"use client";
import React from "react";
import Image from "next/image";

const Tool = ({ tool }) => {
  return (
    <a
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-90 hover:opacity-100 hover:bg-white/10 bg-white/5 px-3 py-2 rounded-full items-center duration-200 inline-flex gap-3 text-lg focus:outline-none focus:ring-2 focus:ring-white/20 px-4 py-2"
    >
      <Image
        src={`/tools/${tool.image}`}
        alt={tool.title}
        width={24}
        height={24}
        className="w-8 h-8 rounded-full"
      />
      {tool.title}
    </a>
  );
};

export default Tool;

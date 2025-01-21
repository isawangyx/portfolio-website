"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    icon: "/icons/software-engineer.png",
    title: "Software Engineer",
  },
  {
    icon: "/icons/team-player.png",
    title: "Team Player",
  },
  {
    icon: "/icons/problem-solving.png",
    title: "Problem Solver",
  },
];

const Cards = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4 md:px-12"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.2, // Stagger animation between cards
          },
        },
      }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="card bg-[#4b496a] rounded-lg px-6 py-10 shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={card.icon}
            alt={card.title}
            width={64}
            height={64}
            className="w-16 h-16 mx-auto mb-4"
          />
          {/* Title */}
          <h3 className="text-white text-xl font-semibold mb-2">
            {card.title}
          </h3>
          {/* Description */}
          <p className="text-gray-400 text-sm">{card.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;

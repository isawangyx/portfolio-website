"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const phrases = [
  "software engineer.",
  "CS major.",
  "machine learning hobbyist.",
  "matcha lover.",
  "dancer.",
];

const TYPING_SPEED = 60; // ms per character
const DELETING_SPEED = 35;
const PAUSE_AFTER = 1200;

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (index >= phrases.length) {
      setIndex(0);
      return;
    }

    if (!isDeleting && subIndex === phrases[index].length) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((s) => s + (isDeleting ? -1 : 1));
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <section id="hero">
      <div className="col-span-7 lg:col-start-3 mx-auto text-center">
        <h1 className="text-white mb-4 text-5xl lg:text-6xl font-extrabold pt-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
            Hi, I&apos;m{" "}
          </span>
          Isabel!
        </h1>
        <p className="text-white mb-20 text-xl lg:text-3xl">
          I&apos;m a{" "}
          <span aria-live="polite">
            {phrases[index].substring(0, subIndex)}
          </span>
          <span
            aria-hidden="true"
            className={`ml-1 inline-block ${
              blink ? "opacity-100" : "opacity-0"
            }`}
          >
            |
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

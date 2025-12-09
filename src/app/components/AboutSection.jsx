"use client";
import React, { useEffect, useMemo, useState } from "react";
import PhotoBook from "./PhotoBook";
import Tool from "./Tool";

import { tools } from "../../lib/tools";

const AboutSection = () => {
  const [ready, setReady] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const [activePicture, setActivePicture] = useState(0);

  useEffect(() => {
    setReady(true);
    const mq = window.matchMedia("(max-width: 640px)");
    const handler = (e) => setSmallScreen(e.matches);
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const pictureText = useMemo(() => {
    switch (activePicture) {
      case 0:
        return "just moved to nyc!";
      case 1:
        return "stayed in kr hall.";
      case 2:
        return "did not sleep at hackharvard.";
      case 3:
        return "had the best matcha in japan!";
      default:
        return "";
    }
  }, [activePicture]);

  return (
    <section id="about" className="min-h-screen">
      {ready && (
        <div>
          {/* Header */}
          <section className="py-6">
            <h2 className="text-5xl font-semibold">About</h2>
            <p className="text-lg opacity-70">
              Welcome to my little corner of the internet!
            </p>
          </section>

          <section className="flex flex-col md:flex-row justify-between relative w-full md:gap-24 gap-12 pt-6 md:pt-12 py-6">
            <div className="z-50 mx-auto flex justify-center items-center lg:-translate-x-20 sm:mb-10">
              <PhotoBook
                activePicture={activePicture}
                setActivePicture={setActivePicture}
                smallScreen={smallScreen}
              />
            </div>

            <div className="flex flex-col gap-4 max-w-xl text-lg text-neutral-300">
              <p>
                I&apos;m a CS student @ NUS with a passion for product-focused
                development. <br />I enjoy enhancing user experiences and
                building impactful tech.
              </p>

              <p>
                When I&apos;m not coding, you&apos;ll catch me exploring new
                places, trying new foods, or touching grass.
              </p>

              <p>
                <span className="transition-opacity">
                  Oh, and I also {pictureText}
                </span>
              </p>
            </div>
          </section>

          <section className="py-10">
            <h3 className="text-5xl font-semibold">Tools</h3>
            <p className="opacity-70 text-lg">What I play with</p>

            <div className="flex flex-wrap gap-2 py-2">
              {tools.map((tool) => (
                <Tool key={tool.title} tool={tool} />
              ))}
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default AboutSection;

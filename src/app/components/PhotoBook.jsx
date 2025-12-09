"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const initialLocations = [
  { index: 0, location: "New York, NY", img: "/newyork.jpeg" },
  { index: 1, location: "Singapore, SG", img: "/singapore.jpeg" },
  { index: 2, location: "Boston, MA", img: "/boston.jpeg" },
  { index: 3, location: "Kyoto, JP", img: "/kyoto.jpeg" },
];

const PhotoBook = ({
  activePicture = 0,
  setActivePicture = () => {},
  smallScreen = false,
}) => {
  const [locations, setLocations] = useState(initialLocations);
  const [ready, setReady] = useState(false);
  const [hover, setHover] = useState(false);
  const [switchAnimation, setSwitchAnimation] = useState(false);

  useEffect(() => {
    setReady(true);
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) setHover(true);
    }
    const t = setTimeout(() => {
      if (smallScreen) setHover(true);
    }, 600);
    return () => clearTimeout(t);
  }, [smallScreen]);

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const switchPicture = async (index) => {
    if (index === 0) return;
    setSwitchAnimation(true);
    try {
      setActivePicture(index);
    } catch (_) {}
    await sleep(200);
    setLocations((prev) => {
      const copy = [...prev];
      const temp = copy[0];
      copy[0] = copy[index];
      copy[index] = temp;
      return copy;
    });
    await sleep(100);
    setSwitchAnimation(false);
  };

  const getClassForIndex = (i) => {
    if (i === 0)
      return "cursor-default absolute inset-0 rounded-lg z-50 drop-shadow-lg";

    if (i === 1) {
      if (switchAnimation)
        return "absolute inset-0 rounded-lg rotate-0 translate-x-0 translate-y-0 -z-10 transition-all duration-300 group";
      if (hover)
        return `absolute inset-0 rounded-lg rotate-[40deg] ${
          smallScreen ? "translate-x-16" : "translate-x-32"
        } ${
          smallScreen ? "translate-y-0" : "translate-y-5"
        } hover:rotate-[42deg] scale-95 hover:scale-100 -z-10 transition-all duration-300 group`;
      return `absolute inset-0 rounded-lg rotate-[24deg] ${
        smallScreen ? "translate-x-10" : "translate-x-16"
      } -translate-y-3 -z-10 transition-all duration-300 group`;
    }

    if (i === 2) {
      if (switchAnimation)
        return "absolute inset-0 rounded-lg rotate-0 translate-x-0 translate-y-0 -z-10 transition-all duration-300 group";
      if (hover)
        return `absolute inset-0 rounded-lg rotate-6 hover:rotate-[10deg] scale-95 hover:scale-100 ${
          smallScreen ? "-translate-y-[4.25rem]" : "-translate-y-32"
        } -z-10 transition-all duration-300 group`;
      return `absolute inset-0 rounded-lg -translate-y-10 rotate-3 -z-10 transition-all duration-300 group`;
    }

    // i === 3
    if (switchAnimation)
      return "absolute inset-0 rounded-lg rotate-0 translate-x-0 translate-y-0 -z-10 transition-all duration-300 group";
    if (hover)
      return `absolute inset-0 rounded-lg -rotate-[40deg] ${
        smallScreen ? "-translate-x-16" : "-translate-x-32"
      } -translate-y-6 hover:-rotate-[42deg] scale-95 hover:scale-100 -z-10 transition-all duration-300`;
    return `absolute inset-0 rounded-lg -rotate-[24deg] ${
      smallScreen ? "-translate-x-8" : "-translate-x-12"
    } -translate-y-7 -z-10 transition-all duration-300`;
  };

  return (
    <div className="relative w-44 h-60 lg:w-72 lg:h-96">
      {locations.map((loc, i) => (
        <button
          key={loc.index}
          className={getClassForIndex(i)}
          onClick={() => switchPicture(i)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          aria-label={`Select ${loc.location}`}
        >
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <Image
              src={loc.img}
              alt={loc.location}
              fill
              style={{ objectFit: "cover" }}
            />
            {/* overlays */}
            {i === 1 && (
              <div className="absolute inset-0 bg-dark/30 group-hover:opacity-20" />
            )}
            {i === 2 && (
              <div className="absolute inset-0 bg-dark/20 group-hover:opacity-0" />
            )}
            {i === 3 && (
              <div className="absolute inset-0 bg-dark/20 group-hover:opacity-0" />
            )}
          </div>
        </button>
      ))}

      <div className="flex items-center justify-center gap-1 w-full text-center opacity-75 absolute -bottom-10 left-1/2 transform -translate-x-1/2">
        <Image
          src="/icons/map-pin.svg"
          alt="location"
          width={16}
          height={16}
          className="inline-block"
        />
        <p className="sm:text-base text-sm ">{locations[0].location}</p>
      </div>
    </div>
  );
};

export default PhotoBook;

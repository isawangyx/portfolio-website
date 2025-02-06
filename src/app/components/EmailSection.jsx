"use client";
import React from "react";
import Link from "next/link";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section id="contact" className="my-12 md:my-12 py-24 gap-4 relative">
      <h3 className="text-3xl font-bold text-white my-2">Let&apos;s Connect</h3>
      <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/isawangyx">
          <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/yanxiang-wang-404557257/">
          <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;

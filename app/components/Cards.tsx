"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

export default function Cards() {
  // Stav pre sledovanie, ktorý div má byť zobrazený
  const [activeClass, setActiveClass] = useState("active");
  const { element, controls } = useScroll();

  return (
    <motion.div
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      className="w-full flex flex-col mb-20"
    >
      <div className="flex justify-evenly text-sm sm:text-2xl urob active element mt-10">
        <button className="" onClick={() => setActiveClass("active")}>
          Hard Skills
        </button>
        <button
          className="cursor-pointer"
          onClick={() => setActiveClass("soft-skills")}
        >
          Soft Skills
        </button>
        <button
          className="cursor-pointer"
          onClick={() => setActiveClass("hobby")}
        >
          Viac o mne 👉
        </button>
      </div>
      <div className="line"></div>

      <div className={`${activeClass !== "active" && "hidden"}`}>
        <div className="hard-skills grid py-8 text-xl md:text-3xl">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>React</div>
          <div>Next.js</div>
        </div>
      </div>
      <div className={`${activeClass !== "soft-skills" && "hidden"}`}>
        <div className="grid soft-skills  py-8 text-xl md:text-3xl">
          <div>Aktívny prístup.</div>
          <div>Samostatnosť.</div>
          <div>Tímová práca.</div>
        </div>
      </div>
      <div className={`${activeClass !== "hobby" && "hidden"}`}>
        <div className="hobby py-8 text-xl md:text-3xl">
          <ul className="flex flex-col gap-8 items-center justify-evenly sm:flex-row ">
            <li>Hobby:</li>
            <li>Šport 🏃</li>
            <li>Autá 🚗</li>
            <li>Turistika 🏔️</li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
    </motion.div>
  );
}

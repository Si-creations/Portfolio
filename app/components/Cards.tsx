"use client";

import React, { useState } from "react";

export default function Cards() {
  // Stav pre sledovanie, ktorý div má byť zobrazený
  const [activeClass, setActiveClass] = useState("hard-skills");

  return (
    <div className="w-full flex flex-col mb-20">
      <div className="flex justify-evenly text-xl sm:text-2xl urob active element">
        <button className="" onClick={() => setActiveClass("hard-skills")}>Hard Skills</button>
        <button className="cursor-pointer" onClick={() => setActiveClass("soft-skills")}>Soft Skills</button>
        <button className="cursor-pointer" onClick={() => setActiveClass("hobby")}>Viac o mne 👉</button>
      </div>
      <div className="line"></div>

      <div className={` ${activeClass !== "hard-skills" && "hidden"}`}>
        <div className="hard-skills grid py-8 text-2xl md:text-4xl">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>React</div>
          <div>Next.js</div>
        </div>
      </div>
      <div
        className={` py-8 text-2xl md:text-4xl ${
          activeClass !== "soft-skills" && "hidden"
        }`}
      >
        <div className="grid soft-skills  py-8 text-2xl md:text-4xl">
          <div>Aktívny prístup.</div>
          <div>Samostatnosť.</div>
          <div>Tímová práca.</div>
        </div>
      </div>
      <div
        className={` py-8 text-2xl md:text-4xl ${
          activeClass !== "hobby" && "hidden"
        }`}
      >
        <div className="hobby py-8 text-2xl md:text-4xl">
          <ul className="flex flex-col gap-8 items-center justify-evenly sm:flex-row ">
            <li>Hobby:</li>
            <li>Šport 🏃</li>
            <li>Autá 🚗</li>
            <li>Turistika 🏔️</li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

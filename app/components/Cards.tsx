"use client";

import React, { useState, useRef } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import { leftIncoming, rightIncomingx, scrollReveal2 } from "../animation";
import useTransitionEnd from "../util";

export default function Cards() {
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
      <div className="flex justify-evenly text-sm sm:text-2xl urob active element mt-10 pb-4">
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className=""
            onClick={() => setActiveClass("active")}
          >
            Hard Skills
          </motion.button>
          {activeClass === "active" && (
            <motion.div
              className="lineA"
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
            ></motion.div>
          )}
        </div>
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveClass("soft-skills")}
          >
            Soft Skills
          </motion.button>
          {activeClass === "soft-skills" && (
            <motion.div
              className="lineA"
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
            ></motion.div>
          )}
        </div>
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveClass("hobby")}
          >
            Viac o mne 👉
          </motion.button>
          {activeClass === "hobby" && (
            <motion.div
              className="lineA"
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
            ></motion.div>
          )}
        </div>
      </div>
      <div className="line"></div>

	    <AnimatePresence mode="wait">
		    {activeClass == "active" ? (
		      <motion.div
		        // className={`${activeClass !== "active" && "hidden"}`}
		        variants={rightIncomingx}
		        initial={"hidden"}
		        animate={"show"}
		        exit="exit"
		        key={1}
		      >
		        <div className="hard-skills grid py-8 text-xl md:text-3xl">
		          <div>HTML</div>
		          <div>CSS</div>
		          <div>JavaScript</div>
		          <div>TypeScript</div>
		          <div>React</div>
		          <div>Next.js</div>
		        </div>
		      </motion.div>
		    ) : ""}

		    {activeClass == "soft-skills" ? (
		      <motion.div
		        // className={`${activeClass !== "soft-skills" && "hidden"}`}
		        variants={rightIncomingx}
		        initial={"hidden"}
		        animate={"show"}
		        exit="exit"
		        key={2}
		      >
		        <div className="grid soft-skills  py-8 text-xl md:text-3xl">
		          <div>Aktívny prístup.</div>
		          <div>Samostatnosť.</div>
		          <div>Tímová práca.</div>
		        </div>
		      </motion.div>
		    ) : ""}

		    {activeClass == "hobby" ? (
		      <motion.div
		        // className={`${activeClass !== "hobby" && "hidden"}`}
		        variants={rightIncomingx}
		        initial={"hidden"}
		        animate={"show"}
		        exit="exit"
		        key={3}
		      >
		        <div className="hobby py-8 text-xl md:text-3xl">
		          <ul className="flex flex-col gap-8 items-center justify-evenly sm:flex-row ">
		            <li>Hobby:</li>
		            <li>Šport 🏃</li>
		            <li>Autá 🚗</li>
		            <li>Turistika 🏔️</li>
		          </ul>
		        </div>
		      </motion.div>
		    ) : ""}
	    </AnimatePresence>
      <div className="line"></div>
    </motion.div>
  );
}




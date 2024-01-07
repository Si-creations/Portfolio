"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import { lineAnim, rightIncomingx } from "../animation";

export default function Cards() {
  const [activeClass, setActiveClass] = useState("active");
  const { element, controls } = useScroll();

  return (
    <div ref={element} className="overflow-hidden">
      <motion.div
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
        className="w-full flex flex-col  page-container"
      >
        <div className="flex justify-evenly text-sm sm:text-2xl urob active element mt-10 pb-4">
          <div className="relative">
            <motion.button
              whileHover={{ y: -4 }}
              onClick={() => setActiveClass("active")}
            >
              Hard Skills
            </motion.button>
            <AnimatePresence>
              {activeClass === "active" && (
                <motion.div
                  className="lineA"
                  variants={lineAnim}
                  initial={"hidden"}
                  animate={"show"}
                  exit="exit"
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative">
            <motion.button
              whileHover={{ y: -4 }}
              onClick={() => setActiveClass("soft-skills")}
            >
              Soft Skills
            </motion.button>
            <AnimatePresence>
              {activeClass === "soft-skills" && (
                <motion.div
                  className="lineA"
                  variants={lineAnim}
                  initial={"hidden"}
                  animate={"show"}
                  exit="exit"
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative">
            <motion.button
              whileHover={{ y: -4 }}
              onClick={() => setActiveClass("hobby")}
            >
              Viac o mne
            </motion.button>
            <AnimatePresence>
              {activeClass === "hobby" && (
                <motion.div
                  className="lineA"
                  variants={lineAnim}
                  initial={"hidden"}
                  animate={"show"}
                  exit="exit"
                ></motion.div>
              )}
            </AnimatePresence>
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
              <div className="hard-skills grid py-8 text-xl md:text-3xl h-96 sm:h-64">
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>TypeScript</div>
                <div>React</div>
                <div>Next.js</div>
              </div>
            </motion.div>
          ) : (
            ""
          )}

          {activeClass == "soft-skills" ? (
            <motion.div
              // className={`${activeClass !== "soft-skills" && "hidden"}`}
              variants={rightIncomingx}
              initial={"hidden"}
              animate={"show"}
              exit="exit"
              key={2}
            >
              <div className="flex flex-col gap-8 items-center justify-evenly sm:flex-row soft-skills  py-8 text-xl md:text-3xl h-96 sm:h-64">
                <div>Aktívny prístup a motivácia.</div>
                <div>Záujem o nové vedomosti.</div>
                <div>Potešenie z tímovej práce.</div>
              </div>
            </motion.div>
          ) : (
            ""
          )}

          {activeClass == "hobby" ? (
            <motion.div
              // className={`${activeClass !== "hobby" && "hidden"}`}
              variants={rightIncomingx}
              initial={"hidden"}
              animate={"show"}
              exit="exit"
              key={3}
            >
              <div className="hobby  text-xl md:text-3xl">
                <ul className="flex flex-col gap-8 items-center justify-evenly sm:flex-row h-96 sm:h-64">
                  <li>Hobby:</li>
                  <li>Šport 🏃</li>
                  <li>Autá 🚗</li>
                  <li>Turistika 🏔️</li>
                </ul>
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
        <div className="line"></div>
      </motion.div>
    </div>
  );
}

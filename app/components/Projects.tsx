"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal2, fade } from "../animation";
import { useState } from "react";
import data from "../data";

export default function Projects() {
  const [dataNames, setDataNames] = useState(data());
  const { element, controls } = useScroll();
  return (
    <div ref={element}>
      <motion.div
        className="mt-20 page-container"
        variants={scrollReveal2}
        animate={controls}
        initial="hidden"
      >
        <motion.h1
          variants={fade}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          Projekty
        </motion.h1>
        <motion.div className="grid-2">
          {dataNames.map((data) => (
            <motion.div
              className="Project hover:bg-opacity-50  bg-gray1 px-4 rounded-xl"
              key={data.id} whileHover={{ scale: 1.06 }}
            >
              <motion.div className="w-full">
                <a href={data.link} target="blank">
                  <Image
                    src={data.image}
                    alt="Project image"
                    priority={false}
                    className="my-4 rounded-xl w-full h-full object-fill"
                  />
                </a>
              </motion.div>
              <h3>{data.name}</h3>
              <div className="Project-techlonogy flex gap-2 mb-4 uppercase">
                {data.technology.map((tech, index) => (
                  <div key={index}>{tech}</div>
                ))}
              </div>
              <div className="options flex gap-4 mb-6 uppercase">
                <motion.div
                  className="hover:text-alt cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href={data.link} target="blank">
                    {data.buttonName1}
                  </a>
                </motion.div>

                <motion.div
                  className="hover:text-alt cursor-pointer"
                  whileHover={{ scale: 1.1, x: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href={data.gitLink} target="blank">
                    {data.buttonName2}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

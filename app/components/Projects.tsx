"use client";
import Image from "next/image";
import doggo from "@/public/doggo.jpg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal2, fade } from "../animation";

export default function Projects() {
  const { element, controls } = useScroll();
  return (
    <motion.div className="pt-20 page-container"
      variants={scrollReveal2}
      animate={controls}
      initial="hidden"
      ref={element}
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
        <motion.div className="Project-1 w-full">
          <Image
            width={450}
            height={250}
            src={doggo}
            alt="Profile photo"
            priority={true}
            className="my-4 rounded-xl w-full max-h-96"
          />
          <h3>Názov projektu</h3>
          <div className="Project-techlonogy flex gap-2 mb-4">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </div>
          <div className="options flex gap-4 mb-6 uppercase">
            <motion.div
              className="hover:text-alt cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Prezrieť projekt
            </motion.div>
            <motion.div
              className="hover:text-alt cursor-pointer"
              whileHover={{ scale: 1.1, x: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              Prezrieť kód
            </motion.div>
          </div>
        </motion.div>
        <motion.div className="Project-2 w-full">
          <Image
            width={450}
            height={250}
            src={doggo}
            alt="Profile photo"
            priority={true}
            className="my-4 rounded-xl w-full max-h-96"
          />
          <motion.h3>Názov projektu</motion.h3>
          <div className="Project-techlonogy flex gap-2 mb-4">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </div>
          <div className="options flex gap-4 mb-6 uppercase">
            <motion.div
              className="hover:text-alt cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Prezrieť projekt
            </motion.div>
            <motion.div
              className="hover:text-alt cursor-pointer"
              whileHover={{ scale: 1.1, x: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              Prezrieť kód
            </motion.div>
          </div>
        </motion.div>
        <motion.div className="Project-3 w-full">
          <Image
            width={450}
            height={250}
            src={doggo}
            alt="Profile photo"
            priority={true}
            className="my-4 rounded-xl w-full max-h-96"
          />
          <motion.h3>Názov projektu</motion.h3>
          <div className="Project-techlonogy flex gap-2 mb-4">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </div>
          <div className="options flex gap-4 mb-6 uppercase">
            <motion.div
              className="hover:text-alt cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Prezrieť projekt
            </motion.div>
            <motion.div
              className="hover:text-alt cursor-pointer"
              whileHover={{ scale: 1.1, x: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              Prezrieť kód
            </motion.div>
          </div>
        </motion.div>
        <motion.div className="Project-4 w-full">
          <Image
            width={450}
            height={250}
            src={doggo}
            alt="Profile photo"
            priority={true}
            className="my-4 rounded-xl w-full max-h-96"
          />
          <motion.h3>Názov projektu</motion.h3>
          <div className="Project-techlonogy flex gap-2 mb-4">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </div>
          <div className="options flex gap-4 mb-6 uppercase">
            <motion.div
              className="hover:text-alt cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Prezrieť projekt
            </motion.div>
            <motion.div
              className="hover:text-alt cursor-pointer"
              whileHover={{ scale: 1.1, x: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              Prezrieť kód
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

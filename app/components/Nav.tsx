"use client";

import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    backgroundColor: scrolled ? "rgb(48, 48, 48)" : "transparent",
    transition: 'background-color 0.5s ease',
  };
  return (
    <div className="Nav sticky top-0 z-10" style={navStyle}>
      <div className="px-4 py-2 max-w-7xl mx-auto flex   justify-center items-center bg  w-full h-15 flex-col sm:flex-row sm:justify-between">
        <motion.div
          className="font-lobster logo text-4xl"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          S-creations
        </motion.div>
        <motion.div
          className="flex gap-3 md:gap-10"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 720 }}
            whileTap={{ scale: 0.8 }}
          >
            <a href="https://github.com/Si-creations" target="_blank">
              <IoLogoGithub className="text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 720 }}
            whileTap={{ scale: 0.8 }}
          >
            <a href="https://www.facebook.com/silvester.mrocek" target="_blank">
              <FaFacebook className="text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 720 }}
            whileTap={{ scale: 0.8 }}
          >
            <a href="" target="_blank">
              <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

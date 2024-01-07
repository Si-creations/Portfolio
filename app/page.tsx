"use client";

import About from "./components/About";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";

export default function Home() {
  return (
    <motion.main 
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Nav />
      <About />
      <Cards />
      <Projects />
      <Contact />
    </motion.main>
  );
}

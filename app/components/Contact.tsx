"use client";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { leftIncoming, rightIncoming, scrollReveal2 } from "../animation";

export default function Contact() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Logika na odoslanie formulára
  };
  const { element, controls } = useScroll();

  return (
    <div className="bg-gray1 pt-8 pb-6 px-2">
      <motion.div className="max-w-7xl mx-auto  flex flex-col sm:flex-row sm:gap-80 sm:px-4 overflow-hidden font-roboto">
        <motion.div
          className="contact flex flex-col text-center pb-8 sm:text-left"
          variants={leftIncoming}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <h1>Kontakt</h1>
          <p className="">
            Ak vás moja práca zaujala, pre viacej informácií ma neváhajte kontaktovať. 
          </p>
        </motion.div>
        <motion.div
          className="form flex  flex-col"
          variants={rightIncoming}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <form onSubmit={handleSubmit} className="px-2">
            <label htmlFor="name">Meno:</label>
            <input
              className="w-full bg-transparent border p-2 resize-none h-auto my-inputs "
              type="text"
              id="name"
              name="name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              className="w-full bg-transparent border p-2 resize-none h-auto my-inputs"
              type="email"
              id="email"
              name="email"
              required
            />

            <label className="" htmlFor="message">
              Správa:
            </label>
            <textarea
              className="w-full bg-transparent border p-2 resize-none h-auto my-inputs"
              id="message"
              name="message"
              rows={3}
              required
            ></textarea>

            <motion.button
              className="mx-auto w-full my-4 p-2  bg-alt rounded-md"
              type="submit"
              whileTap={{ scale: 0.9 }}
            >
              Odoslať
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
      <motion.div
        className="footer-container max-w-7xl mx-auto px-4"
        variants={scrollReveal2}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <div className="line mx-auto"></div>
        <div className="flex flex-col sm:flex-row justify-between">
          <motion.div className="text-center font-lobster logo text-4xl">
            S-creations
          </motion.div>
          <div className="flex gap-3 md:gap-10 justify-center items-center">
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
              <a
                href="https://www.facebook.com/silvester.mrocek"
                target="_blank"
              >
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
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// textarea style >> w-full bg-transparent border textarea textarea-accent resize-none h-auto

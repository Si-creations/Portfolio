"use client";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Logika na odoslanie formulára
  };

  return (
    <div className="bg-gray1 pt-8 pb-6 px-2">
      <div className="max-w-7xl mx-auto  flex flex-col sm:flex-row sm:gap-20 sm:px-4">
        <div className="contact flex flex-col text-center pb-8 sm:text-left">
          <h1>Contact</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            nemo enim iste animi numquam nihil!
          </p>
        </div>
        <div className="form flex flex-col">
          <form onSubmit={handleSubmit} className="px-2">
            <label htmlFor="name">Meno:</label>
            <input
              className="w-full bg-transparent border textarea textarea-accent"
              type="text"
              id="name"
              name="name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              className="w-full bg-transparent border textarea textarea-accent"
              type="email"
              id="email"
              name="email"
              required
            />

            <label className="" htmlFor="message">
              Správa:
            </label>
            <textarea
              className="w-full bg-transparent border textarea textarea-accent resize-none h-auto"
              id="message"
              name="message"
              rows={2}
              required
            ></textarea>

            <button
              className="mx-auto w-full my-4 p-2  btn btn-accent"
              type="submit"
            >
              Odoslať
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="line mx-auto"></div>
        <div className="flex flex-col sm:flex-row justify-between">
          <motion.div className="text-center font-lobster logo text-4xl">
            S-creations
          </motion.div>
          <div className="flex gap-3 md:gap-10 justify-center items-center">
            <IoLogoGithub className="text-2xl md:text-3xl lg:text-4xl" />
            <FaFacebook className="text-2xl md:text-3xl lg:text-4xl" />
            <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

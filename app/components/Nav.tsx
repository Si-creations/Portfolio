"use client"

import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";



export default function Nav() {
  return (
    <div className="Nav flex   justify-center items-center bg  w-full h-15 flex-col sm:flex-row sm:justify-between">
      <h1 className="font-lobster" >S-creations</h1>
      <div className="flex gap-3 md:gap-10">
        <IoLogoGithub className="text-2xl md:text-3xl lg:text-4xl" />
        <FaFacebook className="text-2xl md:text-3xl lg:text-4xl" />
        <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl" />
      </div>
    </div>
  );
}

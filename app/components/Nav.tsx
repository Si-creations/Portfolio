import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Nav() {
  return (
    <div className="Nav flex   justify-center items-center bg  w-full h-15 flex-col">
      <h1>S-creations</h1>
      <div className="flex gap-3">
        <IoLogoGithub className="text-2xl" />
        <FaFacebook className="text-2xl" />
        <FaLinkedin className="text-2xl" />
      </div>
    </div>
  );
}

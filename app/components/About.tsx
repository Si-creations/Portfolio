import Image from "next/image";
import Photo from "@/public/doggo.jpg";
import { motion } from "framer-motion";
import { titleAnim, photoAnim, fade } from "../animation";

export default function About() {
  return (
    <div className="flex flex-col  items-center  min-h-screen md:flex-row lg:gap-36 gap-6 sm:justify-between  page-container">
      <div className="title w-full">
        <div className="hide text-center md:text-left">
          <motion.h1 variants={titleAnim}>
            Ahoj, vítam ťa v mojom portfóliu.
          </motion.h1>
        </div>
        <motion.div variants={fade}>
          <motion.h2 className="text-center  text-xl sm:text-2xl p-10 md:text-left sm:pl-0">
            Jeden múdry človek raz povedal: "Lorem ipsum dolor sit amet." Ale ja
            ti teraz poviem radšej niečo o sebe 😃.
          </motion.h2>
          <motion.h2 className="text-center text-xl sm:text-2xl pb-8 md:text-left sm:pl-0">
            Volám sa Silvester a som začinajúci Front-end programátor.
            Momentálne hľadám svoju prvú prácu v IT sektore.
          </motion.h2>
        </motion.div>
      </div>
      <motion.div variants={photoAnim} className="my-4 w-full">
        <Image
          src={Photo}
          alt="Profile photo"
          priority={true}
          className="my-4 rounded-xl w-full h-full object-fill shadow"
        />
      </motion.div>
    </div>
  );
}

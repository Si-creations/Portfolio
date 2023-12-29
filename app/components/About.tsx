import Image from "next/image";
import Photo from "@/public/doggo.jpg";
import { motion } from "framer-motion";
import { titleAnim, photoAnim, fade } from "../animation";

export default function About() {
  return (
    <div className="flex flex-col  items-center  min-h-screen lg:flex-row sm:gap-36  justify-between">
      <div className="title">
        <div className="hide text-center lg:text-left">
          <motion.h1 variants={titleAnim}>Ahoj!</motion.h1>
        </div>
        <div className="hide text-center lg:text-left">
          <motion.h1 variants={titleAnim}>
            Vítam ťa v mojom portfóliu.
          </motion.h1>
        </div>
        <motion.div variants={fade}>
          <motion.h2 className="text-center text-2xl p-10 lg:text-left sm:pl-0">
            Jeden múdry človek raz povedal:"Lorem ipsum dolor sit amet." Ale ja
            ti teraz poviem radšej niečo o sebe 😃.
          </motion.h2>
          <motion.h2 className="text-center text-2xl pb-8 lg:text-left sm:pl-0">
            Volám sa Silvester a som začinajúci Front-end programátor.
            Momentálne hľadám svoju prvú prácu v IT sektore.
          </motion.h2>
        </motion.div>
      </div>
      <motion.div
        variants={photoAnim}
        className="my-4 selection:max-w-full "
      >
        <Image
          src={Photo}
          alt="Profile photo"
          priority={true}
          className="rounded-xl shadow"
        />
      </motion.div>
    </div>
  );
}

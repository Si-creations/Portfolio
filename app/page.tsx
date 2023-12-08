import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Image from "next/image";
import Photo from "@/public/doggo.jpg";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <main className="p-4">
        <Nav />
        <div className="flex flex-col  items-center  min-h-screen ">
          <h1 className="text-center my-10">Wellcome to my page! <br></br> I'm Silvester Mroček.</h1>
          <Image
            width={450}
            height={450}
            src={Photo}
            alt="Profile photo"
            priority={true}
            className="my-4 rounded-xl"
          />
          <h2 className="text-center p-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            tempore cupiditate sapiente beatae inventore!
          </h2>
        </div>
        <div className="flex flex-col  items-center mb-20">
          <div className="line"></div>
          <Experience />
          <div className="line"></div>
        </div>
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

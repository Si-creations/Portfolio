import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Image from "next/image";
import Photo from "@/public/doggo.jpg";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <main className="p-4 max-w-7xl mx-auto">
        <Nav />
        <div className="flex flex-col  items-center  min-h-screen sm:flex-row sm:gap-16 justify-between">
          <div>
            <h1 className="text-center my-6 sm:text-left">
              Wellcome to my page! <br></br> I'm Silvester Mroček.
            </h1>
            <h2 className="text-center p-10 sm:text-left sm:pl-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              tempore cupiditate sapiente beatae inventore!
            </h2>
          </div>
          <Image
            width={450}
            height={250}
            src={Photo}
            alt="Profile photo"
            priority={true}
            className="my-4 rounded-xl max-w-full"
          />
        </div>
        <div className=" w-full flex flex-col mb-20">
          <div className="line"></div>
          <Experience />
          <div className="line"></div>
        </div>
        <Projects/>
      </main>
      <Contact />
    </div>
  );
}

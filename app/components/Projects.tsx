"use client";
import Image from "next/image";
import doggo from "@/public/doggo.jpg";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="grid-2">
        <div className="Project-1 w-full">
          <Image
            width={450}
            height={250}
            src={doggo}
            alt="Profile photo"
            priority={true}
            className="my-4 rounded-xl w-full h-80"
          />
          <h3>Project name</h3>
          <div className="Project-techlonogy flex gap-2 mb-4">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </div>
          <div className="options flex gap-2 mb-6 uppercase">
            <div>View project</div>
            <div>View code</div>
          </div>
        </div>
        <div className="Project-2 w-full">
          <Image
            width={450}
            height={250}
            src={doggo}
            alt="Profile photo"
            priority={true}
            className="my-4 rounded-xl w-full h-80"
          />
          <h3>Project name</h3>
          <div className="Project-techlonogy flex gap-2 mb-4">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </div>
          <div className="options flex gap-2 mb-6 uppercase">
            <div>View project</div>
            <div>View code</div>
          </div>
        </div>
        <div className="Project-3 w-full">
          <Image
            width={450}
            height={250}
            src={doggo}
            alt="Profile photo"
            priority={true}
            className="my-4 rounded-xl w-full h-80"
          />
          <h3>Project name</h3>
          <div className="Project-techlonogy flex gap-2 mb-4">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </div>
          <div className="options flex gap-2 mb-6 uppercase">
            <div>View project</div>
            <div>View code</div>
          </div>
        </div>
        <div className="Project-3 w-full">
          <Image
            width={450}
            height={250}
            src={doggo}
            alt="Profile photo"
            priority={true}
            className="my-4 rounded-xl w-full h-80"
          />
          <h3>Project name</h3>
          <div className="Project-techlonogy flex gap-2 mb-4">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </div>
          <div className="options flex gap-2 mb-6 uppercase">
            <div>View project</div>
            <div>View code</div>
          </div>
        </div>
      </div>
      {/* <div className="line"></div> */}
    </div>
  );
}


{/* <div className=" w-full flex flex-col mb-20">
      <div className="flex justify-evenly text-xl sm:text-2xl urob active element ">
        <p>Hard Skills</p>
        <p>Soft Skills</p>
        <p>Viac o mne 👉</p>
      </div>
      <div className="line"></div>
      <div className="hard-skills grid py-8 text-2xl md:text-4xl">
        <div>HTML</div>
        <div>CSS</div>
        <div>JavaScript</div>
        <div>TypeScript</div>
        <div>React</div>
        <div>Next.js</div>
      </div>
      <div className="line"></div>
      <div className="soft-skills grid py-8 text-2xl md:text-4xl">
        <div>Aktívny prístup.</div>
        <div>Samostatnosť.</div>
        <div>Tímová práca.</div>
      </div>
      <div className="hobby py-8 text-2xl md:text-4xl">
        <ul className="flex justify-evenly">
          <li>Hobby:</li>
          <li>Šport 🏃</li>
          <li>Autá 🚗</li>
          <li>Turistika 🏔️</li>
        </ul>
      </div>
    </div>*/}
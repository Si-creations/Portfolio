"use client";
import Image from "next/image";
import doggo from "@/public/doggo.jpg";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="grid">
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
      </div>
      <div className="line"></div>
    </div>
  );
}

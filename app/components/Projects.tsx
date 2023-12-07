export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project-container flex flex-col  items-center  min-h-screen bg-teal-300">
        <div className="Project-1 w-full">
          <div className="project-img">Project IMAGE</div>
          <div>Project name</div>
          <div className="Project-techlonogy flex gap-2">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </div>
          <div className="options flex gap-2 ">
            <div>View project</div>
            <div>View code</div>
          </div>
        </div>
        <div className="Project-2 w-full">
          <div className="project-img">Project IMAGE</div>
          <div>Project name</div>
          <div className="Project-techlonogy flex gap-2">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </div>
          <div className="options flex gap-2 ">
            <div>View project</div>
            <div>View code</div>
          </div>
        </div>
        <div className="Project-3 w-full">
          <div className="project-img">Project IMAGE</div>
          <div>Project name</div>
          <div className="Project-techlonogy flex gap-2">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </div>
          <div className="options flex gap-2 ">
            <div>View project</div>
            <div>View code</div>
          </div>
        </div>
      </div>
    </div>
  );
}

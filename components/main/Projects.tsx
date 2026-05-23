import Link from "next/link";
import ProjectCard from "../sub/ProjectCard";
import { PROJECT_CARDS } from "@/constants/projects";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10 z-[100]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {PROJECT_CARDS.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            className="hover:scale-105 transition-transform"
          >
            <ProjectCard
              src={project.src}
              title={project.title}
              description={project.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;

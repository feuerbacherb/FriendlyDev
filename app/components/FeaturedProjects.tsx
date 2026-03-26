import ProjectCard from "~/components/ProjectCard";
import type { Project } from "~/types";

type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
};

const FeaturedProjects = ({ projects, count = 4 }: FeaturedProjectsProps) => {
  if (projects.length === 0) return null;

  return (
    <>
      <h2 className='text-2xl font-bold mg-6 text-gray-200'>🌟Featured Projects</h2>
      <div className='grid gap-6 sm:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </>
  );
};

export default FeaturedProjects;

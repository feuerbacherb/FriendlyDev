import ProjectCard from "~/components/ProjectCard";
import type { Project } from "~/types";

type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
};

const FeaturedProjects = ({ projects, count = 4 }: FeaturedProjectsProps) => {
  const featured = projects.filter((p) => p.featured).slice(0, count);

  return (
    <>
      <h2 className='text-2xl font-bold mg-6 text-gray-200'>🌟Featured Projects</h2>
      <div className='grid gap-6 sm:grid-cols-2'>
        {featured.map((project) => (
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

"use client";
import { ProjectCard } from "@/components";
import data from "@/store/projects-data";
const ProjectsPage = () => {
  return (
    <section className="pt-24 px-8">
      <div className="container mx-auto mb-20 text-center">
        <div className="mb-4 md:text-4xl text-3xl font-semibold">
          My Projects
        </div>
        <div className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
          All of my projects are displayed below. The source code and the live
          application links are provided and you can check them out.
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1">
        {data.map(({ title, description, sourceUrl, LiveUrl }) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            sourceUrl={sourceUrl}
            LiveUrl={LiveUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

import { projectDetailData } from "./../../../data/projects/projectDetailData.ts/projectDetailData";
import FilterableProjects from "@/components/projects/FilterableProjects";
export default async function ProjectsPage() {
  const categories = Array.from(new Set(projectDetailData.flatMap((project) => project.category))).sort();
  return (
    <section id="projects" className="h-full pt-12 mb-4 selection:bg-blueLight_color">
      <h2 className="text-center font-SMUSnow text-blue_color text-lg md:text-2xl mb-6 selection:bg-brown_color">
        Projects.
      </h2>
      <p className="text-center w-60 sm:w-auto md:w-auto lg:w-auto mx-auto font-scoreRegular text-sm sm:text-lg md:text-xl text-stone-700">
        Click on a project to view its detailed information.
      </p>
      <FilterableProjects projects={projectDetailData} categories={categories} />

      <h5 className="text-center font-SMUSnow text-red_color text-2xl md:text-4xl mt-6">
        There are no Projects to display yet. <br />
      </h5>
      <h6 className="text-center font-SMUSnow text-black_color text-base md:text-lg mt-4">
        Will be updated soon!
      </h6>
    </section>
  );
}

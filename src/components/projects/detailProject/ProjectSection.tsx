// currently under the maintenance.
// This file is not in use, but it is not deleted to prevent errors.

import findProject from "@/service/findProject";
import { Project } from "@/types/project";
import dynamic from "next/dynamic";
import Image from "next/image";

const sectionConfig = {
  contribution: {
    iconSrc: "",
    sectionTitle: "",
    alt: "",
  },
  troubleShooting: {
    iconSrc: "",
    sectionTitle: "",
    alt: "",
  },
  review: {
    iconSrc: "",
    sectionTitle: "",
    alt: "",
  },
};

type ProjectSectionProps = {
  projectPath: string;
  section: "contribution" | "troubleShooting" | "review";
};
const DetailContent = dynamic(() => import("./DetailContent"));

export default function ProjectSection({
  projectPath,
  section,
}: ProjectSectionProps) {
  const project: Project | undefined = findProject(projectPath);

  if (!project) {
    return null;
  }
  const { iconSrc, sectionTitle, alt } = sectionConfig[section];

  const sectionData = project[section];

  return (
    <section className="mt-16">
      <h4 className="text-lg md:text-xl font-semibold md:font-bold mb-5 flex flex-row gap-2">
        <Image
          src={iconSrc}
          alt={alt}
          width={25}
          height={25}
          style={{ width: 25, height: 25 }}
          priority
        />
        <span>{sectionTitle}</span>
      </h4>
      {sectionData && <DetailContent contentList={sectionData} />}
    </section>
  );
}

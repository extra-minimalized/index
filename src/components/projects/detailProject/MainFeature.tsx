// currently under the maintenance.
// This file is not in use, but it is not deleted to prevent errors.

import findProject from "@/service/findProject";
import { Project } from "@/types/project";
import dynamic from "next/dynamic";
import Image from "next/image";

type MainFeatureProps = {
  projectPath: string;
};

const MarkdownBox = dynamic(() => import("@/components/markdown/MarkdownBox"));

export default function MainFeature({ projectPath }: MainFeatureProps) {
  const project: Project | undefined = findProject(projectPath);

  if (!project) return null;

  const { points } = project;
  return (
    <section>
      <h4 className="text-lg md:text-xl font-semibold md:font-bold mb-5 flex flex-row gap-2">
        <Image
          src="/images/icons/icon-pin.png"
          alt="Pin icon"
          width={25}
          height={25}
          style={{ width: 25, height: 25 }}
          priority
        />
        <span>Main Features</span>
      </h4>
      <ul>
        {points.map((point, idx) => (
          <li
            key={`${project}${idx}`}
            className="list-disc ml-4 marker:text-blue_color text-base md:text-lg my-1"
          >
            <MarkdownBox>{point}</MarkdownBox>
          </li>
        ))}
      </ul>
    </section>
  );
}

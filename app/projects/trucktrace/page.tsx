import type { Metadata } from "next";
import data from "@/data/trucktrace.json";
import { ProjectPage } from "@/components/project-page";
import type { ProjectData } from "@/lib/project-data";

const project = data as ProjectData;

export const metadata: Metadata = {
  title: `${project.title} | Manish's Portfolio`,
  description: project.overview.description,
};

export default function TruckTracePage() {
  return <ProjectPage data={project} />;
}

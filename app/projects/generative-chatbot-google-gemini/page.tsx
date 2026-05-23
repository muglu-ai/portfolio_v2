import type { Metadata } from "next";
import data from "@/data/chatbot.json";
import { ProjectPage } from "@/components/project-page";
import type { ProjectData } from "@/lib/project-data";

const project = data as ProjectData;

export const metadata: Metadata = {
  title: `${project.title} | Manish's Portfolio`,
  description: project.overview.description,
};

export default function GenerativeChatbotPage() {
  return <ProjectPage data={project} />;
}

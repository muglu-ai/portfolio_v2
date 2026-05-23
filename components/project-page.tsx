import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ProjectOverview } from "@/components/project-overview";
import { ProjectImages } from "@/components/project-images";
import { FeaturesList } from "@/components/features-list";
import { TechnologiesUsed } from "@/components/technologies-used";
import { PerformanceMetrics } from "@/components/performance-metrics";
import { Button } from "@/components/ui/button";
import type { ProjectData } from "@/lib/project-data";

interface ProjectPageProps {
  data: ProjectData;
}

export function ProjectPage({ data }: ProjectPageProps) {
  return (
    <div className="container mx-auto px-4 py-8 pt-8 mt-12 text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        {data.projectLink ? (
          <Link
            href={data.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : null}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <ProjectImages images={data.images} />
        </div>
        <div>
          <ProjectOverview data={data.overview} />
        </div>
      </div>
      <FeaturesList features={data.features} />
      <TechnologiesUsed technologies={data.technologies} />
      <PerformanceMetrics metrics={data.metrics} />
    </div>
  );
}

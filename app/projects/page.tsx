import { promises as fs } from 'fs'
import Link from 'next/link'
import { ProjectOverview } from '@/components/project-overview'
import { ProjectImages } from '@/components/project-images'
import { FeaturesList } from '@/components/features-list'
import { TechnologiesUsed } from '@/components/technologies-used'
import { PerformanceMetrics } from '@/components/performance-metrics'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

export default async function EventRegistrationSystem() {
    const file = await fs.readFile(process.cwd() + '/data/project-data.json', 'utf8')
    const data = JSON.parse(file)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <h1 className="text-4xl font-bold">{data.title}</h1>
                <Link href={data.projectLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
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
    )
}


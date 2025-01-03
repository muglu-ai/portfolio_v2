import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectOverviewProps {
    data: {
        description: string
        details: string
    }
}

export function ProjectOverview({ data }: ProjectOverviewProps) {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Project Overview</CardTitle>
                <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{data.details}</p>
            </CardContent>
        </Card>
    )
}


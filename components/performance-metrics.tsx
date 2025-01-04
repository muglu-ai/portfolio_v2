"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"


interface Metric {
    name: string
    value: number
    max: number
}

interface PerformanceMetricsProps {
    metrics: Metric[]
}

export function PerformanceMetrics({ metrics }: PerformanceMetricsProps) {
    const [hoveredMetric, setHoveredMetric] = useState<string | null>(null)

    if (metrics.length != 0) {
    return (
        // hello
        <Card>
            <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {metrics.map((metric) => (
                        <div
                            key={metric.name}
                            className="space-y-2"
                            onMouseEnter={() => setHoveredMetric(metric.name)}
                            onMouseLeave={() => setHoveredMetric(null)}
                        >
                            <div className="flex justify-between">
                                <span>{metric.name}</span>
                                <span className="font-semibold">
                  {hoveredMetric === metric.name ? `${metric.value} / ${metric.max}` : `${metric.value}`}
                </span>
                            </div>
                            <Progress value={(metric.value / metric.max) * 100} />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
    }
    else{
        return null
    }

}


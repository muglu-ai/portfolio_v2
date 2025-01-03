import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TechnologyItem {
    name: string
    logo?: string
}

interface Technology {
    category: string
    items: TechnologyItem[]
}

interface TechnologiesUsedProps {
    technologies: Technology[]
}

export function TechnologiesUsed({ technologies }: TechnologiesUsedProps) {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="font-semibold text-lg">{tech.category}</h3>
                            <div className="flex flex-wrap gap-4">
                                {tech.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-center space-x-2">
                                        {item.logo ? (
                                            <div className="relative w-8 h-8">
                                                <Image
                                                    src={item.logo}
                                                    alt={`${item.name} logo`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold">
                          {item.name.slice(0, 2).toUpperCase()}
                        </span>
                                            </div>
                                        )}
                                        <span className="text-sm">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}


import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesListProps {
    features: string[]
}

export function FeaturesList({ features }: FeaturesListProps) {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}


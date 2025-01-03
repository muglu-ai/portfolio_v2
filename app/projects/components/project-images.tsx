"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectImage {
    url: string
    alt: string
}

interface ProjectImagesProps {
    images: ProjectImage[]
}

export function ProjectImages({ images }: ProjectImagesProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <Card className="mb-8 overflow-hidden">
            <CardContent className="p-0">
                <div className="relative aspect-video">
                    <Image
                        src={images[currentIndex].url}
                        alt={images[currentIndex].alt}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                        <Button
                            variant="outline"
                            size="icon"
                            className="bg-background/80 backdrop-blur-sm"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="bg-background/80 backdrop-blur-sm"
                            onClick={nextImage}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <p className="text-center py-2 text-sm text-muted-foreground">{images[currentIndex].alt}</p>
            </CardContent>
        </Card>
    )
}


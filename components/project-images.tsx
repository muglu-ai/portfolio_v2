"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_INTERVAL_MS = 20_000;

interface ProjectImage {
  url: string;
  alt: string;
}

interface ProjectImagesProps {
  images: ProjectImage[];
}

export function ProjectImages({ images }: ProjectImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  const goToSlide = (index: number) => {
    setCurrentIndex((index + images.length) % images.length);
  };

  const nextImage = () => {
    goToSlide(currentIndex + 1);
  };

  const prevImage = () => {
    goToSlide(currentIndex - 1);
  };

  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [currentIndex, hasMultipleImages, images.length]);

  if (images.length === 0) return null;

  return (
    <Card className="mb-8 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <Image
            key={images[currentIndex].url}
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            fill
            className="object-cover object-top transition-opacity duration-500"
            priority={currentIndex === 0}
          />
          {hasMultipleImages ? (
            <>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-background/80 backdrop-blur-sm"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-background/80 backdrop-blur-sm"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {images.map((image, index) => (
                  <button
                    key={image.url}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-6 bg-white"
                        : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
        <p className="text-center py-2 text-sm text-muted-foreground">
          {images[currentIndex].alt}
          {hasMultipleImages ? (
            <span className="ml-2 text-xs text-muted-foreground/70">
              {currentIndex + 1} / {images.length}
            </span>
          ) : null}
        </p>
      </CardContent>
    </Card>
  );
}


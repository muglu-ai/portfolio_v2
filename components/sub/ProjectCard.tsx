import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-lg border border-[#2A0E61] shadow-lg">
      <div className="relative h-52 w-full shrink-0 overflow-hidden bg-[#0a0a1a]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

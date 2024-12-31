import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
      <div
          className="flex flex-col items-center justify-center py-20"
          id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Projects
        </h1>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
          <a href="https://startupmahakumbh.assocham.org/exhibitor_directory" className="hover:scale-105 transition-transform">
            <ProjectCard
                src="/ExhibitorDirectory.png"
                title="Exhibitor Directory System"
                description="Streamlined exhibitor form submissions, admin management, and dynamic PDF generation."
            />
          </a>
          <a href="https://tgs2024.org/ticket" className="hover:scale-105 transition-transform">
            <ProjectCard
                src="/EventRegistrationSystem.webp"
                title="Event Registration System"
                description="Scalable registration platform with integrated payments, mobile app sync, and real-time notifications."
            />
          </a>
          <a href="https://interlinx.in/registration2/" className="hover:scale-105 transition-transform">
            <ProjectCard
                src="/ExhibitorPortal.webp"
                title="Exhibitor Management Portal"
                description="User-friendly portal for exhibitors to manage profiles, invite delegates, and receive updates."
            />
          </a>
          <a href="https://bengalurutechsummit.com/web/interlinx-2024/" className="hover:scale-105 transition-transform">
            <ProjectCard
                src="/InterlinxPortal.png"
                title="Interlinx B2B Portal"
                description="Advanced B2B matchmaking platform with intelligent table allocation and seamless payment integration."
            />
            </a>
            <a href="" className="hover:scale-105 transition-transform">
            <ProjectCard
                src="/GenerativeChatbot.webp"
                title="Generative Chatbot"
                description="AI-powered chatbot with advanced conversational capabilities using Google Gemini."
            />
            </a>
            <a href="" className="hover:scale-105 transition-transform">
            <ProjectCard
                src="/PDFImageRAG.webp"
                title="PDF & Image RAG System"
                description="Interactive AI system to query documents and images, enabling seamless information retrieval."
            />
            </a>
          <a href="https://scaleupevent.in/" className="hover:scale-105 transition-transform">
          <ProjectCard
                src="/ScaleUpWebsite.png"
                title="ScaleUp Event Website"
                description="Dynamic website for ScaleUp with engaging design, CMS features, and AWS scalability."
            />
          </a>
        </div>
      </div>

);
};

export default Projects;

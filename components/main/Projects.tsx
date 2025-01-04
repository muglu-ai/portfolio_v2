import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
      <div
          className="flex flex-col items-center justify-center py-10 z-100"
          id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Projects
        </h1>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
          <a href="/projects/exhibitor-directory" className="hover:scale-105 transition-transform">
            <ProjectCard
                src="/ExhibitorDirectory.png"
                title="Exhibitor Directory System"
                description="Streamlined exhibitor form submissions, admin management, and dynamic PDF generation."
            />
          </a>
          <a href="/projects/event-registration-system" className="hover:scale-105 transition-transform">
            <ProjectCard
                src="/EventRegistrationSystem.webp"
                title="Event Registration System"
                description="Scalable registration platform with integrated payments, mobile app sync, and real-time notifications."
            />
          </a>
          <a href="/projects/exhibitor-portal" className="hover:scale-105 transition-transform">
            <ProjectCard
                src="/ExhibitorPortal.webp"
                title="Exhibitor Management Portal"
                description="User-friendly portal for exhibitors to manage profiles, invite delegates, and receive updates."
            />
          </a>
          <a href="/projects/b2b-portal" className="hover:scale-105 transition-transform">
            <ProjectCard
                src="/InterlinxPortal.png"
                title="Interlinx B2B Portal"
                description="Advanced B2B matchmaking platform with intelligent table allocation and seamless payment integration."
            />
            </a>
            <a href="/projects/generative-chatbot-google-gemini" className="hover:scale-105 transition-transform">
            <ProjectCard
                src="/GenerativeChatbot.webp"
                title="Generative Chatbot"
                description="AI-powered chatbot with advanced conversational capabilities using Google Gemini."
            />
            </a>
            <a href="/projects/pdf-and-image-rag-google-gemini" className="hover:scale-105 transition-transform">
            <ProjectCard
                src="/PDFImageRAG.webp"
                title="PDF & Image RAG System"
                description="Interactive AI system to query documents and images, enabling seamless information retrieval."
            />
            </a>
          <a href="/projects/scaleup-event-exhibition" className="hover:scale-105 transition-transform">
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

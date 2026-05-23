import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-5">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}

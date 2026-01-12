import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import SocialLinks from "@/components/SocialLinks";
import Navigation from "@/components/Navigation";
import Resume from "@/components/Resume";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        {/* Header with Profile Picture */}
        <header className="text-center mb-12">
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden ring-4 ring-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-blue-500/20">
              <Image
                src="/Professional_Pic.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
                quality={95}
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 via-indigo-200 to-slate-100 bg-clip-text text-transparent mb-3">
              Professional Portfolio
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light mb-4">
              Welcome to my digital portfolio
            </p>
            <Resume />
          </div>
        </header>

        {/* About Me Section */}
        <section id="about" className="mb-12">
          <AboutMe />
        </section>

        {/* Education Section */}
        <section id="education" className="mb-12">
          <Education />
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12">
          <Projects />
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="mb-12">
          <Certificates />
        </section>

        {/* Social Links Section */}
        <section id="contact" className="mb-12">
          <SocialLinks />
        </section>
      </div>
    </main>
  );
}


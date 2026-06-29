import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Resume Analyser",
    color: "#38bdf8",
    stack: ["React", "Node.js", "Express", "AI Integration"],
    description: "An AI-powered application that parses resumes, analyzes keyword density against job descriptions, and provides actionable insights to improve ATS scoring.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop", 
    github: "https://github.com/kajal70158/Resume-analyser",
    live: "https://resume-analyser-89wh.onrender.com/",
  },
  {
    title: "Jannat Food",
    color: "#fbbf24",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    description: "A full-stack food delivery platform featuring a custom shopping cart, secure payment integration, and an admin dashboard for real-time order tracking.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", 
    github: "https://github.com/kajal70158/Jannat-Food",
    live: "https://jannat-food.onrender.com/",
  },
  {
    title: "Learning Platform",
    color: "#a78bfa",
    stack: ["React", "Node.js", "MongoDB"],
    description: "An interactive EdTech platform supporting video streaming, module-based learning paths, and an automated backend grading system for student assessments.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop", 
    github: "https://github.com/kajal70158/Learning-Platform",
    live: "https://learning-platform-ltfe.onrender.com/",
  },
  {
    title: "Meeting App",
    color: "#34d399",
    stack: ["React", "WebRTC", "Socket.io"],
    description: "A low-latency video conferencing application utilizing WebRTC and Socket.io for seamless peer-to-peer communication and real-time text chat.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop", 
    github: "https://github.com/kajal70158/meeting",
    live: "https://meeting-0jrx.onrender.com/",
  },
  {
    title: "Event Management System",
    color: "#f472b6",
    stack: ["React", "Express", "MongoDB", "Node.js"],
    description: "A comprehensive management dashboard for organizing events, handling ticket sales, and analyzing attendee metrics through a scalable backend architecture.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop", 
    github: "https://github.com/kajal70158/Event-Management-System",
    live: "https://eventmanagement-system-tau.vercel.app/",
  },
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-24 px-6 bg-bg relative">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-primary/60" />
            <p className="font-mono text-brand-primary text-sm tracking-[0.2em] uppercase">
              Projects
            </p>
            <div className="w-8 h-px bg-brand-primary/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Things I've Built
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            From social platforms to security tools — each project solving a real problem.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          {projects.map((p) => (
            <motion.div
              variants={item}
              key={p.title}
              className="bg-[#111113] border border-white/5 rounded-3xl overflow-hidden group hover:border-white/10 transition-all duration-500 shadow-2xl shadow-black/50"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent z-10 opacity-90" />
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 pt-0 -mt-2 relative z-20">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-8 border-l-2 border-brand-primary/30 pl-4 py-1">
                  {p.description}
                </p>
                
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div className="flex flex-wrap gap-2.5 flex-1">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-sm font-medium text-muted px-4 py-2 bg-[#1a1a1e] border border-white/5 rounded-xl hover:text-white transition-colors cursor-default"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 shrink-0">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-[#222225] hover:bg-[#2a2a2e] rounded-xl text-white transition-colors"
                      aria-label="View Source Code on GitHub"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    {p.live && (
                      <a 
                        href={p.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-[#38bdf8] hover:bg-[#38bdf8]/90 rounded-xl text-[#0b0f1a] transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:-translate-y-0.5"
                        aria-label="View Live Demo"
                      >
                        <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

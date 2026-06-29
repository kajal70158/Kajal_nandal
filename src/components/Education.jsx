import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Geeta University",
    duration: "2022 - 2026",
    grade: "7.8 CGPA",
    icon: GraduationCap,
    color: "#818cf8",
    description: "Specializing in full-stack web development, data structures, and algorithmic problem solving. Active participant in coding hackathons and technical seminars.",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Your High School Name", // Placeholder for user to update if needed
    duration: "2020 - 2022",
    grade: "Distinction",
    icon: BookOpen,
    color: "#c084fc",
    description: "Focus on Physics, Chemistry, and Mathematics. Built foundational logic and mathematical reasoning skills essential for programming.",
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-[#0a0a0c] relative border-y border-white/5">
      {/* Premium ambient light */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-secondary/60" />
            <p className="font-mono text-brand-secondary text-sm tracking-[0.2em] uppercase">
              Academic Journey
            </p>
            <div className="w-8 h-px bg-brand-secondary/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Education & Background
          </h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-primary before:via-brand-secondary before:to-transparent">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline dot */}
              <div 
                className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#111113] border-4 border-[#0a0a0c] shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10 transition-transform duration-500 group-hover:scale-110"
                style={{ boxShadow: `0 0 20px ${edu.color}40` }}
              >
                <edu.icon className="w-5 h-5" style={{ color: edu.color }} />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 p-8 rounded-3xl bg-[#111113]/80 backdrop-blur-xl border border-white/5 hover:border-white/15 transition-all duration-500 group-hover:-translate-y-2 shadow-2xl relative overflow-hidden">
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-[50px] -z-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: edu.color }}
                />
                
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="text-sm font-mono px-3 py-1 bg-[#1a1a1e] border border-white/5 rounded-md text-muted">
                    {edu.duration}
                  </span>
                  <span 
                    className="text-sm font-bold px-3 py-1 rounded-md"
                    style={{ color: edu.color, backgroundColor: `${edu.color}15` }}
                  >
                    {edu.grade}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-2 leading-tight">
                  {edu.degree}
                </h3>
                <h4 className="text-lg text-muted mb-4 font-serif italic">
                  {edu.institution}
                </h4>
                
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Briefcase, ChevronRight, TerminalSquare } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Development Intern",
    company: "Coding Blocks",
    period: "June 2025 – July 2025",
    location: "Panipat, India",
    color: "#818cf8",
    icon: TerminalSquare,
    points: [
      "Built responsive websites using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Developed and integrated RESTful APIs for scalable backend services",
      "Implemented authentication systems and improved overall user experience",
    ],
  },
  {
    role: "Python Intern",
    company: "Geeta University",
    period: "June 2024 – July 2024",
    location: "Panipat, India",
    color: "#c084fc",
    icon: Briefcase,
    points: [
      "Performed COVID-19 data analysis and visualization using Python",
      "Created interactive United States map visualizations using geospatial libraries",
      "Developed a feature-rich Hotel Menu Program as a practical Python application",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative bg-bg">
      {/* Premium ambient light */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-primary/60" />
            <p className="font-mono text-brand-primary text-sm tracking-[0.2em] uppercase">
              Internships & Roles
            </p>
            <div className="w-8 h-px bg-brand-primary/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-secondary before:via-brand-primary before:to-transparent">
          {experiences.map((exp, index) => (
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
                className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#111113] border-4 border-bg shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10 transition-transform duration-500 group-hover:scale-110"
                style={{ boxShadow: `0 0 20px ${exp.color}40` }}
              >
                <exp.icon className="w-5 h-5" style={{ color: exp.color }} />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 p-8 rounded-3xl bg-[#111113]/80 backdrop-blur-xl border border-white/5 hover:border-white/15 transition-all duration-500 group-hover:-translate-y-2 shadow-2xl relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 w-32 h-32 opacity-10 rounded-full blur-[50px] -z-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: exp.color }}
                />
                
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-semibold text-white leading-tight">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-mono px-3 py-1.5 bg-[#1a1a1e] border border-white/5 rounded-md text-muted shrink-0 w-fit">
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap mb-6 pb-6 border-b border-white/5">
                  <span 
                    className="font-bold text-lg"
                    style={{ color: exp.color }}
                  >
                    {exp.company}
                  </span>
                  <span className="text-white/20 px-2">•</span>
                  <span className="text-muted">{exp.location}</span>
                </div>

                <ul className="space-y-4">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-4 text-gray-400 leading-relaxed items-start">
                      <ChevronRight className="w-5 h-5 shrink-0 mt-0.5" style={{ color: exp.color }} />
                      <span className="text-sm md:text-base group-hover:text-gray-300 transition-colors">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Development Intern",
    company: "Coding Blocks",
    period: "June 2025 – July 2025",
    location: "Panipat, India",
    color: "#818cf8",
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
    points: [
      "Performed COVID-19 data analysis and visualization using Python",
      "Created interactive United States map visualizations using geospatial libraries",
      "Developed a feature-rich Hotel Menu Program as a practical Python application",
    ],
  },
];

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-24 px-6 relative">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-brand-primary/60 md:hidden" />
              <p className="font-mono text-brand-primary text-sm tracking-[0.2em] uppercase">
                Experience
              </p>
              <div className="w-8 h-px bg-brand-primary/60 md:hidden" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Where I've Worked
            </h2>
          </div>
          <div className="hidden md:block w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-primary/50 before:via-brand-secondary/30 before:to-transparent"
        >
          {experiences.map((exp, i) => (
            <motion.div
              variants={item}
              key={i}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-bg bg-surface shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-brand-primary">
                <Briefcase className="w-4 h-4 text-brand-primary" />
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 bg-surface/50 border border-border/50 rounded-3xl backdrop-blur-sm hover:border-brand-primary/30 hover:bg-surface transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 opacity-10 blur-[50px] -z-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: exp.color }} />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-medium text-white group-hover:text-brand-primary transition-colors">
                    {exp.role}
                  </h3>
                  <span className="inline-block text-xs font-mono text-muted border border-border/50 bg-bg px-3 py-1.5 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap mb-6">
                  <span
                    className="font-mono text-sm font-medium"
                    style={{ color: exp.color }}
                  >
                    {exp.company}
                  </span>
                  <span className="text-border">·</span>
                  <span className="text-sm text-muted">{exp.location}</span>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-muted leading-relaxed items-start">
                      <ChevronRight className="w-5 h-5 shrink-0 mt-0.5" style={{ color: exp.color }} />
                      <span className="text-sm group-hover:text-white/90 transition-colors">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

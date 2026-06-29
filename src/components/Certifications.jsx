import { motion } from "framer-motion";

const certs = [
  { name: "AIU Cricket", date: "Aug 2025", icon: "🏏", color: "#fbbf24" },
  { name: "Cyber Crime Investigation", date: "Sept 2024", icon: "🔍", color: "#f472b6" },
  { name: "ISEA Cyber Hygiene", date: "Sept 2024", icon: "🛡️", color: "#38bdf8" },
  { name: "Cyber Intelligence", date: "Sept 2024", icon: "🧠", color: "#818cf8" },
  { name: "Philosophy & Critical Thinking — NPTEL", date: "Apr 2025", icon: "💡", color: "#34d399" },
  { name: "Google Cloud Platform", date: "Feb 2026", icon: "☁️", color: "#60a5fa" },
];

export default function Certifications() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="certifications" className="py-24 px-6 bg-bg relative">
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
              Certifications
            </p>
            <div className="w-8 h-px bg-brand-primary/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Learning Never Stops
          </h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certs.map((c) => (
            <motion.div
              variants={item}
              key={c.name}
              className="group bg-surface/30 border border-border/50 rounded-2xl p-6 flex gap-5 items-center hover:bg-surface/80 hover:border-brand-primary/30 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                style={{ backgroundColor: c.color }} 
              />
              
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-bg border border-border shadow-inner shrink-0 text-2xl group-hover:scale-110 transition-transform duration-300">
                {c.icon}
              </div>
              <div>
                <p className="text-white font-medium text-sm leading-snug mb-1.5 group-hover:text-brand-primary transition-colors">
                  {c.name}
                </p>
                <p
                  className="text-xs font-mono font-medium"
                  style={{ color: c.color }}
                >
                  {c.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

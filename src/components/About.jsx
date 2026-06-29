import { motion } from "framer-motion";
import { BookOpen, MapPin, Terminal, Award, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute top-40 right-0 w-72 h-72 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              About <span className="text-brand-primary italic">Me</span>
            </h2>
            <div className="h-px flex-1 bg-border/60 ml-4" />
          </div>
          <p className="text-muted text-lg max-w-2xl">
            Passionate about building full-stack web applications that are as functional as they are beautiful.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main Intro Card */}
          <motion.div variants={item} className="md:col-span-2 bg-surface/50 border border-border/50 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-[80px] -z-10 group-hover:bg-brand-secondary/10 transition-colors duration-500" />
            <Terminal className="w-8 h-8 text-brand-primary mb-6" />
            <h3 className="text-2xl text-white font-medium mb-4">Code. Create. Connect.</h3>
            <p className="text-muted leading-relaxed mb-6">
              I'm a Computer Science undergraduate at Geeta University, Haryana. With hands-on internship experience in MERN stack development and Python data analysis, I bridge the gap between raw data and polished user interfaces.
            </p>
            <p className="text-muted leading-relaxed">
              When I'm not coding, you'll find me on the badminton court or exploring new places. I love solving problems and constantly learning new technologies.
            </p>
          </motion.div>

          {/* Location & Status Card */}
          <motion.div variants={item} className="bg-surface/50 border border-border/50 rounded-3xl p-8 backdrop-blur-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent z-10 pointer-events-none" />
            <img 
              src="/images/two.jpeg" 
              alt="Kajal Profile" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 z-0" 
            />
            <div className="relative z-20">
              <MapPin className="w-8 h-8 text-brand-secondary mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-xl text-white font-medium mb-2">Location</h3>
              <p className="text-muted group-hover:text-white/90 transition-colors">Rohtak, Haryana</p>
            </div>
            
            <div className="relative z-20 mt-8 pt-8 border-t border-border/50 group-hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-white shadow-sm">Open to Work</span>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={item} className="md:col-span-3 bg-surface/50 border border-border/50 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-brand-primary" />
              <h3 className="text-xl text-white font-medium">Education Journey</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  degree: "B.Tech — Computer Science",
                  inst: "Geeta University",
                  year: "2023 – Present",
                  score: "7.8 CGPA",
                },
                {
                  degree: "Higher Secondary (12th)",
                  inst: "Ozone International School",
                  year: "2023",
                  score: "83.8%",
                },
                {
                  degree: "Secondary (10th)",
                  inst: "Ozone International School",
                  year: "2021",
                  score: "99.08%",
                },
              ].map((edu, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <p className="text-sm font-mono text-brand-secondary mb-2">{edu.year}</p>
                    <p className="text-white font-medium mb-1 text-lg">{edu.degree}</p>
                    <p className="text-muted text-sm mb-4">{edu.inst}</p>
                    <span className="inline-block px-3 py-1 text-xs bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded-full font-mono">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

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
          <motion.div variants={item} className="md:col-span-2 bg-[#111113] border border-white/5 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-white/10 transition-all duration-500 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-[80px] -z-10 group-hover:bg-brand-secondary/15 transition-colors duration-500" />
            <Terminal className="w-8 h-8 text-brand-primary mb-6" />
            <h3 className="text-2xl text-white font-medium mb-4">Architect. Build. Scale.</h3>
            <p className="text-muted leading-relaxed mb-6">
              I am a results-driven Software Engineer with a proven track record of designing and delivering robust full-stack applications. Specializing in the MERN ecosystem and Python-driven data solutions, I focus on writing clean, maintainable code and optimizing system performance.
            </p>
            <p className="text-muted leading-relaxed">
              From architecting secure RESTful APIs to developing highly interactive React interfaces, I bridge the gap between complex backend logic and seamless user experiences. I thrive in environments that challenge me to solve hard problems and continuously push the boundaries of modern web technologies.
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

          {/* Quick Stats & Hobbies */}
          <motion.div variants={item} className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Interests Card */}
            <div className="bg-[#111113] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 rounded-full blur-[60px] -z-10 group-hover:bg-brand-primary/15 transition-colors duration-500" />
              <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                <Award className="w-5 h-5 text-brand-primary" /> Beyond the Screen
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Badminton 🏸", "Exploring Places 🌍", "Problem Solving 🧩", "Continuous Learning 📚"].map(hobby => (
                  <span key={hobby} className="px-4 py-2 bg-[#1a1a1e] border border-white/5 rounded-xl text-sm font-medium text-muted hover:text-white transition-colors cursor-default">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote/Vision Card */}
            <div className="bg-[#111113] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden group flex flex-col justify-center">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-secondary/5 rounded-full blur-[60px] -z-10 group-hover:bg-brand-secondary/15 transition-colors duration-500" />
              <Briefcase className="w-8 h-8 text-brand-secondary mb-4 opacity-50" />
              <h3 className="text-2xl text-white font-serif leading-relaxed">
                "Transforming complex problems into elegant, user-centric solutions."
              </h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

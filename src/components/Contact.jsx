import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-brand-primary/60" />
            <p className="font-mono text-brand-primary text-sm tracking-[0.2em] uppercase">
              Get In Touch
            </p>
            <div className="w-8 h-px bg-brand-primary/60" />
          </div>
          
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tight">
            Let's Build Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary italic pb-2">
              Together.
            </span>
          </h2>
          
          <p className="text-muted text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            I am currently open to new opportunities and exciting engineering challenges. Whether
            you're looking to build a robust enterprise application, scale an existing platform, or just want to connect — my inbox is always open.
          </p>

          <a
            href="mailto:nandalkajal43@gmail.com"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10 mb-16"
          >
            Say Hello
          </a>

          {/* Social links */}
          <div className="flex justify-center gap-8 border-t border-border/50 pt-10">
            <a
              href="mailto:nandalkajal43@gmail.com"
              className="group flex flex-col items-center gap-3 text-muted hover:text-white transition-colors"
            >
              <div className="p-4 bg-surface border border-border rounded-full group-hover:border-brand-primary group-hover:bg-brand-primary/10 transition-all">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/kajal-nandal"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 text-muted hover:text-white transition-colors"
            >
              <div className="p-4 bg-surface border border-border rounded-full group-hover:border-brand-primary group-hover:bg-brand-primary/10 transition-all">
                <FaLinkedin className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/kajal70158"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 text-muted hover:text-white transition-colors"
            >
              <div className="p-4 bg-surface border border-border rounded-full group-hover:border-brand-primary group-hover:bg-brand-primary/10 transition-all">
                <FaGithub className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

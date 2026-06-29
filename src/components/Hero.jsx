import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const canvasRef = useRef(null);

  // Background subtle particle effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const dots = Array.from({ length: 40 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      color: Math.random() > 0.5 ? "#818cf8" : "#c084fc",
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.color + "60";
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
      />
      {/* Premium glowing orbs with floating animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-muted">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] tracking-tight mb-6"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Kajal
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg sm:text-xl max-w-xl leading-relaxed mb-8"
          >
            Software Engineer specializing in architecting scalable, high-performance web applications. Expertise in the MERN stack, system design, and building elegant digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-7 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/images/Kajal.pdf"
              download="kajal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 bg-surface border border-border text-white hover:border-brand-secondary hover:bg-brand-secondary/10 hover:text-brand-secondary rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 bg-surface border border-border text-white hover:border-brand-primary hover:bg-brand-primary/5 hover:text-brand-primary rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links & Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 w-full pt-8 border-t border-border/50"
          >
            <div className="flex gap-4">
              <a href="https://github.com/kajal70158" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-surface border border-border rounded-full text-muted hover:text-white hover:border-brand-primary hover:bg-brand-primary/10 transition-all hover:-translate-y-1">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kajal-nandal" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-surface border border-border rounded-full text-muted hover:text-white hover:border-brand-primary hover:bg-brand-primary/10 transition-all hover:-translate-y-1">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:nandalkajal43@gmail.com" className="p-2.5 bg-surface border border-border rounded-full text-muted hover:text-white hover:border-brand-primary hover:bg-brand-primary/10 transition-all hover:-translate-y-1">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex gap-8">
              <div>
                <p className="font-serif text-2xl text-white">Full-Stack</p>
                <p className="text-xs text-muted uppercase tracking-wider">Expertise</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-white">10+</p>
                <p className="text-xs text-muted uppercase tracking-wider">Projects Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          {/* Continuous Floating Animation */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="absolute inset-4 bg-surface border border-border rounded-[2.5rem] rotate-3 transition-transform hover:rotate-6 duration-500" />
            <div className="absolute inset-4 bg-card border border-border rounded-[2.5rem] -rotate-3 transition-transform hover:-rotate-6 duration-500" />
            
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-border/50 bg-surface shadow-2xl z-10 group-hover/img:shadow-brand-primary/20 transition-all duration-700">
              {/* Premium overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60 z-20" />
              <img
                src="/images/one.jpeg"
                alt="Kajal"
                className="w-full h-full object-cover object-top scale-100 hover:scale-110 transition-all duration-700 relative z-10"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

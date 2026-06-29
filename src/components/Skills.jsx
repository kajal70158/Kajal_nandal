import { motion } from "framer-motion";

const allSkills = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS",
  "Node.js", "Express.js", "MongoDB", "RESTful APIs",
  "C", "C++", "Java", "Python",
  "Power BI", "Git", "GitHub", "Google Cloud", "VS Code",
  "Leadership", "Self-driven", "Problem Solving"
];

// Helper to generate slightly randomized animation properties for organic bubble feel
const getRandomBubbleAnimation = (index) => {
  const duration = 4 + (index % 4); // 4 to 7 seconds
  const yOffset = 10 + (index % 10); // 10 to 20 px
  const delay = (index % 5) * 0.4;
  
  return {
    y: [0, -yOffset, 0],
    x: [0, (index % 3 === 0 ? 5 : -5), 0],
    scale: [1, 1.05, 1],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }
  };
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow for the cloud */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
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
              Technical Arsenal
            </p>
            <div className="w-8 h-px bg-brand-primary/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Skill <span className="italic text-brand-secondary">Cloud</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            A continuous orbit of the languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Massive Bubble Cloud Container */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 py-10 max-w-4xl mx-auto">
          {allSkills.map((skill, index) => {
            const anim = getRandomBubbleAnimation(index);
            
            // Generate subtle varying sizes and opacities for depth
            const isLarge = index % 4 === 0;
            const isSmall = index % 5 === 0 && !isLarge;
            
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <motion.span
                  animate={{ y: anim.y, x: anim.x, scale: anim.scale }}
                  transition={anim.transition}
                  className={`
                    flex items-center justify-center text-center
                    backdrop-blur-md border border-white/10
                    hover:bg-brand-primary hover:text-white hover:border-brand-primary hover:scale-110
                    transition-all duration-300 cursor-default
                    shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(129,140,248,0.5)]
                    ${isLarge ? 'px-8 py-4 text-lg font-semibold bg-[#1a1a1e]/80 text-white rounded-[2rem]' : 
                      isSmall ? 'px-5 py-2 text-sm font-medium bg-[#111113]/60 text-muted rounded-full' : 
                      'px-6 py-3 text-base font-medium bg-[#141417]/70 text-gray-200 rounded-[1.5rem]'}
                  `}
                >
                  {skill}
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

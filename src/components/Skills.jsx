import { motion } from "framer-motion";

const allSkills = [
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React.js", color: "#61DAFB" },
  { name: "Tailwind CSS", color: "#38B2AC" },
  { name: "Node.js", color: "#339933" },
  { name: "Express.js", color: "#A8B9CC" },
  { name: "MongoDB", color: "#47A248" },
  { name: "RESTful APIs", color: "#FF5722" },
  { name: "C", color: "#A8B9CC" },
  { name: "C++", color: "#00599C" },
  { name: "Java", color: "#007396" },
  { name: "Python", color: "#3776AB" },
  { name: "Power BI", color: "#F2C811" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#ffffff" },
  { name: "Google Cloud", color: "#4285F4" },
  { name: "VS Code", color: "#007ACC" },
  { name: "Leadership", color: "#a78bfa" },
  { name: "Self-driven", color: "#fbbf24" },
  { name: "Problem Solving", color: "#f472b6" },
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
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <motion.span
                  animate={{ y: anim.y, x: anim.x, scale: anim.scale }}
                  transition={anim.transition}
                  style={{
                    color: skill.color,
                    backgroundColor: `${skill.color}15`, // 15 hex opacity
                    borderColor: `${skill.color}40`, // 40 hex opacity
                    boxShadow: `0 4px 20px ${skill.color}10`,
                  }}
                  className={`
                    flex items-center justify-center text-center
                    backdrop-blur-md border
                    hover:scale-110 hover:brightness-125
                    transition-all duration-300 cursor-default
                    ${isLarge ? 'px-8 py-4 text-lg font-semibold rounded-[2rem]' : 
                      isSmall ? 'px-5 py-2 text-sm font-medium rounded-full' : 
                      'px-6 py-3 text-base font-medium rounded-[1.5rem]'}
                  `}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

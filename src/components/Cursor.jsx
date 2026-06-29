import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Ambient Large Spotlight */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-50 hidden lg:block mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, rgba(192, 132, 252, 0.05) 40%, rgba(0,0,0,0) 70%)',
        }}
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      />
      
      {/* Precision Dot Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white/80 rounded-full pointer-events-none z-[100] hidden lg:flex items-center justify-center mix-blend-difference shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 3 : 1,
          backgroundColor: isHovering ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,1)",
          border: isHovering ? "1px solid rgba(255,255,255,0.5)" : "none",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
    </>
  );
}

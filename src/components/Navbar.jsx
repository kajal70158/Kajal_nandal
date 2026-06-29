import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["About", "Skills", "Projects", "Education", "Experience", "Certifications", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-bg/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#hero"
            className="font-serif text-2xl text-white tracking-tight flex items-center gap-1 group"
          >
            Kajal<span className="text-brand-primary transition-colors group-hover:text-brand-secondary">.</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 bg-surface/50 px-8 py-3 rounded-full border border-white/5 backdrop-blur-md">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm font-medium text-muted hover:text-white transition-colors duration-300"
              >
                {l}
              </a>
            ))}
          </div>
          
          <div className="hidden md:block w-[72px]" /> {/* Spacer to center menu */}

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-white bg-surface border border-white/10 rounded-full"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-2xl font-serif text-white hover:text-brand-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

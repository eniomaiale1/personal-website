"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { personal } from "@/lib/data";

function Orbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl animate-float"
        style={{
          background: "radial-gradient(circle, #818cf8 0%, transparent 70%)",
          opacity: 0.08,
          bottom: "100px",
          right: "-100px",
        }}
      />
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter({
    words: personal.titleVariants,
    typingSpeed: 75,
    deletingSpeed: 40,
    pauseDuration: 2200,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 noise-grid"
    >
      <Orbs />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/[0.08] text-[#00d4ff] text-xs font-mono tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
          Available for consulting
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4"
        >
          {personal.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "text-[#00d4ff]" : ""}>
              {word}{" "}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <span className="text-xl md:text-2xl font-mono text-slate-300 font-medium">
            {typed}
            <span className="ml-0.5 inline-block w-0.5 h-6 bg-[#00d4ff] animate-pulse align-middle" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-slate-500 text-sm font-mono mb-10 tracking-wide"
        >
          📍 {personal.location}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#experience"
            className="px-8 py-3.5 rounded-xl font-semibold text-[#0a0a0f] text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#00d4ff]/25"
            style={{ background: "linear-gradient(135deg, #00d4ff, #818cf8)" }}
          >
            View Experience
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl font-semibold text-white text-sm border border-slate-700 hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/[0.08] transition-all duration-200 hover:scale-105"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 font-mono tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-[#00d4ff]"
          />
        </div>
      </motion.div>
    </section>
  );
}

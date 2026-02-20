"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6 bg-[#0f172a]/50">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Experience</h2>
          <div className="section-subline" />
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[#00d4ff]/60 via-[#818cf8]/40 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experience.map((entry, i) => (
              <motion.div
                key={`${entry.company}-${entry.role}`}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                className="md:pl-10 relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1.5 w-6 h-6 rounded-full items-center justify-center border-2 border-[#00d4ff] bg-[#0a0a0f]">
                  {entry.current && (
                    <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
                  )}
                </div>

                <div className="card group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#00d4ff] transition-colors duration-200">
                        {entry.role}
                      </h3>
                      <p className="text-[#00d4ff] font-semibold text-sm mt-0.5">
                        {entry.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700 whitespace-nowrap">
                      {entry.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {entry.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00d4ff]/60 flex-shrink-0" />
                        <span className="text-slate-400 text-sm leading-relaxed">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

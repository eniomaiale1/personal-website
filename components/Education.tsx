"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 px-6 bg-[#0f172a]/50">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Education</h2>
          <div className="section-subline" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.15 }}
              className="card hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="font-bold text-white text-lg mb-1 leading-snug">
                {edu.degree}
              </h3>
              <p className="text-[#00d4ff] font-semibold text-sm mb-3">
                {edu.institution}
              </p>
              <span className="text-xs font-mono text-slate-500 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

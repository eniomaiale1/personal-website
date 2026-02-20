"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personal } from "@/lib/data";

const stats = [
  { label: "Years in Tech", value: "20+" },
  { label: "Bug Reduction", value: "70%" },
  { label: "Platform Reliability", value: "92%" },
  { label: "Revenue Generated", value: "$500K" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">About</h2>
          <div className="section-subline" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {personal.summary}
            </p>
            <p className="text-slate-400 leading-relaxed">
              Currently serving as{" "}
              <span className="text-[#00d4ff] font-medium">
                Senior Director of Software Engineering at the Miami HEAT
              </span>
              , I blend deep technical expertise with strategic leadership —
              building high-performing engineering teams that deliver
              world-class fan and operations experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="tag cursor-pointer"
              >
                ✉ {personal.email}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tag cursor-pointer"
              >
                in LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl font-extrabold text-[#00d4ff] mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-slate-500 font-medium tracking-wide uppercase">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

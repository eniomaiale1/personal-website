"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/lib/data";

const links = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: "✉",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/eniomaiale",
    href: personal.linkedin,
    icon: "in",
    external: true,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Get In Touch</h2>
          <div className="section-subline mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-slate-400 text-lg mb-12 leading-relaxed max-w-xl mx-auto"
        >
          I&apos;m open to consulting engagements and leadership conversations.
          Feel free to reach out via email or connect on LinkedIn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl card hover:scale-105 transition-all duration-200 min-w-[200px]"
            >
              <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border border-[#00d4ff]/40 bg-[#00d4ff]/10 text-[#00d4ff] group-hover:bg-[#00d4ff]/20 transition-colors duration-200">
                {link.icon}
              </span>
              <div className="text-left">
                <div className="text-xs text-slate-500 mb-0.5 uppercase tracking-wide font-mono">
                  {link.label}
                </div>
                <div className="text-slate-200 text-sm font-medium group-hover:text-[#00d4ff] transition-colors duration-200">
                  {link.value}
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

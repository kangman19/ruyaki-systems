"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/content";

export default function AboutContent() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="max-w-2xl mx-auto py-32">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, type: "spring", stiffness: 60, damping: 20 }}
        className="text-display-lg font-extrabold text-text-primary mb-10 leading-tight"
      >
        Websites built to match{" "}
        <span className="gradient-text-gold">your ambition.</span>
      </motion.h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 text-body-lg text-text-secondary leading-relaxed"
      >
        <motion.p variants={itemVariants}>
          Local businesses are evolving at an incredible pace. Every day, growing companies are upgrading their logistics, mastering customer service, and modernizing their physical operations to compete at a world-class level.
        </motion.p>
        <motion.p variants={itemVariants}>
          But when you look at their digital presence, there is often a massive gap. A brilliant, thriving business should not be held back by an outdated, slow website that fails to reflect its true quality.
        </motion.p>
        <motion.p variants={itemVariants}>
          Astral Agency was started to bridge that exact gap. We do not just build online presence; we build high-performance business engines. Every website and booking system we design is engineered from the ground up for speed and visibility. By combining clean code with deep search engine optimization (SEO), we ensure your business ranks exactly where your customers are looking.
        </motion.p>
        <motion.p variants={itemVariants} className="font-mono text-label text-gold uppercase tracking-widest mb-6">
          We chose the name Astral because it means to reach for the stars. For us, that is not just a poetic phrase. It represents the exact trajectory we want for your business.
        </motion.p>
        <motion.p variants={itemVariants}>
          Our goal is to take the operational excellence you have already built offline and project it flawlessly online. We turn your website into a tool that actively captures premium clients, reduces your daily administrative work, and drives measurable revenue to your bottom line.
        </motion.p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-sm font-semibold text-gold"
      >
        Ian Kangethe, Founder
      </motion.p>
    </div>
  );
}

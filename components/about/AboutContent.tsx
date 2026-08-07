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
        <motion.p variants={itemVariants} className="text-body-lg font-semibold text-text-primary">
          We build the digital systems behind growing businesses.
        </motion.p>
        <motion.p variants={itemVariants}>
          Local businesses have a growing gap between how well businesses operate and how well they are represented online.
        </motion.p>
        <motion.p variants={itemVariants}>
          A great business can have excellent service, a loyal customer base, and ambitious plans for growth, yet still be held back by a slow website, poor visibility on Google, or processes that rely on scattered messages and manual work.
        </motion.p>
        <motion.p variants={itemVariants} className="font-mono text-label text-gold uppercase tracking-widest mb-6">
          Ruyaki Systems was built to bridge that gap.
        </motion.p>
        <motion.p variants={itemVariants}>
          We don&apos;t build websites simply to give businesses an online presence. We build digital systems designed to help businesses get discovered, capture customers, and operate more efficiently.
        </motion.p>
        <motion.p variants={itemVariants}>
          Our websites are engineered from the ground up for speed, usability, search visibility, and long-term growth. We approach visibility as part of the build itself, not something added afterwards. The goal isn&apos;t simply to have a website — it&apos;s to have a digital presence that gives customers a reason to find you, trust you, and get in touch.
        </motion.p>
        <motion.p variants={itemVariants}>
          Beyond the front of the business, we build the systems that keep things moving behind it. Booking and reservation systems, payment and ordering solutions, customer and lead management, dashboards, content management systems, and other custom tools are built around the way each business actually operates.
        </motion.p>
        <motion.p variants={itemVariants}>
          No unnecessary complexity. No forcing a business into a template that doesn&apos;t fit.
        </motion.p>
        <motion.p variants={itemVariants}>
          We take the operational excellence businesses have already built and bring it online with the same level of care.
        </motion.p>
        <motion.p variants={itemVariants}>
          Whether we&apos;re helping a restaurant turn searches into reservations, a service business turn visitors into enquiries, or a growing company replace manual processes with a proper digital system, the objective stays the same:
        </motion.p>
        <motion.p variants={itemVariants} className="font-mono text-label text-gold uppercase tracking-widest mb-6">
          Build technology that works for the business not the other way around.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-sm text-text-secondary"
      >
        <p className="font-semibold text-gold">Ian Kangethe</p>
        <p>Founder &amp; Technical Lead</p>
        <p>Ruyaki Systems</p>
      </motion.div>
    </div>
  );
}

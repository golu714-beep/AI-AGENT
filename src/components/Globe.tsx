"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Globe = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden group/globe">
      {/* Globe Container */}
      <div className="relative w-64 h-64 md:w-96 md:h-96">
        {/* Subtle Glow */}
        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full animate-pulse" />

        {/* The Outer Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ rotate: 0, scale: 0.8 }}
            animate={{
              rotate: 360 * (i % 2 === 0 ? 1 : -1),
              scale: 1 + i * 0.05,
            }}
            transition={{
              rotate: {
                duration: 20 + i * 10,
                repeat: Infinity,
                ease: "linear",
              },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute inset-0 border border-white/[0.05] rounded-full"
          />
        ))}

        {/* The Globe Sphere */}
        <div className="absolute inset-4 rounded-full border border-white/10 bg-[#050505] shadow-[inset_0_0_50px_rgba(139,92,246,0.1)] overflow-hidden">
          {/* Animated Map Overlay (SVG based simplified world) */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-[200%] h-full flex grayscale opacity-20 transition-opacity group-hover/globe:opacity-40"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1600 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Simplified World Path for continuous scroll */}
              <path
                d="M100 200 L150 250 L200 200 L250 280 L300 150 L350 220 L400 180 L450 300 L500 250 L600 350 L700 200 L800 400 L900 300 L1000 450 L1100 250 L1200 350 L1300 200 L1400 400 L1500 150 L1600 300"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M50 400 L120 450 L250 500 L350 480 L450 550 L550 450 L650 600 L750 500 L850 650 L950 550 L1050 700 L1150 600 L1250 750 L1350 650 L1450 800 L1550 700"
                stroke="currentColor"
                strokeWidth="1"
              />
              {/* Add more decorative paths */}
              <circle cx="200" cy="300" r="2" fill="currentColor" />
              <circle cx="600" cy="400" r="2" fill="currentColor" />
              <circle cx="1000" cy="200" r="2" fill="currentColor" />
              <circle cx="1400" cy="500" r="2" fill="currentColor" />
            </svg>
          </motion.div>

          {/* Data Points / Pulsing Nodes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
              className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)] z-20"
            />
          ))}

          {/* Interactive Scanning Line */}
          <motion.div
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-10"
          />
        </div>

        {/* Orbiting Labels */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/2 -ml-[120px] md:-ml-[180px]"
          >
            <div className="px-3 py-1 bg-white/5 border border-white/10 backdrop-blur-md rounded-md flex items-center gap-2 -rotate-[360deg] animate-pulse">
              <div className="w-1 h-1 rounded-full bg-emerald-500" />
              <span className="text-[8px] md:text-[10px] font-mono font-black text-gray-500 uppercase tracking-widest">
                Global_Sync: OK
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visual Data Readouts */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end gap-1 font-mono">
        <span className="text-[8px] uppercase tracking-[0.3em] font-black text-gray-500">
          Latency_Matrix
        </span>
        <div className="flex gap-1 mt-1">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [4, 12, 4] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1 bg-primary/40 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Globe;

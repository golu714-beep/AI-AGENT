"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
  "Acme AI",
  "Nexus Corp",
  "Vortex Labs",
  "Stellar Support",
  "Hyperion",
  "Aether",
  "L",
];

const Marquee = () => {
  return (
    <div className="py-16 md:py-24 border-y border-white/5 bg-[#080809] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-black tracking-[0.6em] text-gray-500 uppercase ml-[0.6em]">
            Trusted by Innovative Brands
          </span>
          <div className="h-px w-12 bg-primary/40 shadow-[0_0_10px_rgba(139,92,246,0.3)]" />
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden group py-4">
        <motion.div
          className="flex items-center whitespace-nowrap min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* List Set 1 */}
          <div className="flex items-center gap-8 md:gap-24 pr-8 md:pr-24">
            {brands.map((brand, i) => (
              <React.Fragment key={`set1-${i}`}>
                <span className="text-3xl md:text-7xl font-black text-gray-500 hover:text-white transition-all duration-700 cursor-default uppercase tracking-tighter hover:scale-105 select-none">
                  {brand}
                </span>
                <div className="w-1.5 md:w-3 h-1.5 md:h-3 rounded-full bg-primary/20 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.1)]" />
              </React.Fragment>
            ))}
          </div>

          {/* List Set 2 (Identical for seamless loop) */}
          <div className="flex items-center gap-8 md:gap-24 pr-8 md:pr-24">
            {brands.map((brand, i) => (
              <React.Fragment key={`set2-${i}`}>
                <span className="text-3xl md:text-7xl font-black text-gray-500 hover:text-white transition-all duration-700 cursor-default uppercase tracking-tighter hover:scale-105 select-none">
                  {brand}
                </span>
                <div className="w-1.5 md:w-3 h-1.5 md:h-3 rounded-full bg-primary/20 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.1)]" />
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Deep Aesthetic Fades */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-64 bg-gradient-to-r from-[#080809] via-[#080809]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 md:w-64 bg-gradient-to-l from-[#080809] via-[#080809]/80 to-transparent z-20 pointer-events-none" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
};

export default Marquee;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Twitter, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 md:pt-32 pb-12 md:pb-16 px-6 relative overflow-hidden bg-[#030304]">
      {/* Visual Background (Scanlines & Grids) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px:100px] opacity-[0.05]" />
        {/* Top border beam animation */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent shadow-[0_0_20px_rgba(139,92,246,0.2)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4 max-w-sm">
            <Link href="/" className="flex items-center gap-4 mb-10 group">
              <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20 group-hover:border-primary/50 transition-all duration-700 shadow-inner translate-y-0 group-hover:-translate-y-1">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-black tracking-[0.4em] text-white uppercase group-hover:text-primary transition-colors">
                  AITELZ
                </span>
                <span className="text-[7px] font-mono text-gray-600 uppercase tracking-widest font-bold">
                  Protocol_v4.2
                </span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 border-l border-primary/20 pl-6 border-dashed">
              Revolutionizing enterprise customer experience through predictive
              intelligence and autonomous voice node clusters.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.05] text-gray-500 hover:text-primary hover:border-primary/30 transition-all flex items-center justify-center group/icon hover:scale-110 active:scale-95 shadow-inner"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[9px] font-mono font-black uppercase tracking-[0.4em] text-white/40 mb-10">
              OS_LAYER_01
            </h4>
            <ul className="space-y-4">
              {[
                "Platform",
                "Solutions",
                "Voice Engine",
                "Security",
                "Ecosystem",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[11px] font-black uppercase tracking-widest text-gray-600 hover:text-white transition-all flex items-center gap-2 group/link"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary/20 group-hover/link:bg-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[9px] font-mono font-black uppercase tracking-[0.4em] text-white/40 mb-10">
              OS_LAYER_02
            </h4>
            <ul className="space-y-4">
              {["About", "Customers", "Enterprise", "Contact", "Careers"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all flex items-center gap-2 group/link"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary/20 group-hover/link:bg-primary transition-colors" />
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Newsletter / Action */}
          <div className="lg:col-span-4">
            <h4 className="text-[9px] font-mono font-black uppercase tracking-[0.4em] text-white/40 mb-10">
              STATUS_FEED
            </h4>
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden group/news">
              <div className="relative z-10">
                <h5 className="text-white text-lg font-bold mb-3">
                  Sync with Aitelz.
                </h5>
                <p className="text-gray-500 text-xs mb-8 font-medium">
                  Join the elite network of enterprise innovators.
                </p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="PROTOCOL_ADDRESS"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-[10px] font-mono font-bold text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/40 transition-colors uppercase tracking-widest"
                  />
                  <button className="absolute right-2 top-2 bottom-2 px-4 rounded-lg bg-primary/20 border border-primary/30 text-primary text-[9px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                    Link
                  </button>
                </div>
              </div>
              {/* Scanline for box */}
              <motion.div
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6 md:gap-8">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[10px] font-mono font-black text-gray-700 tracking-[0.4em] uppercase">
              &copy; {currentYear} AITELZ_PROTOCOL_SYS_0101
            </p>
            <span className="text-[7px] font-mono text-gray-800 uppercase tracking-widest">
              All_Rights_Verified_SLA
            </span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-10 gap-y-4">
            {["Privacy", "Terms", "Compliance", "Architecture"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[9px] font-mono font-black text-gray-600 hover:text-primary uppercase tracking-[0.3em] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

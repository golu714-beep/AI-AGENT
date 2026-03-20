"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  CreditCard,
  Mic2,
  Brain,
  BarChart3,
  ShieldCheck,
  Activity,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    id: "roi",
    moduleTag: "MODULE_TYPE_01",
    category: "ROI_OPTIMIZED",
    title: "Cost Effective",
    description:
      "Reduce operational costs by up to 70% with autonomous AI workers.",
    icon: <TrendingUp className="w-5 h-5" />,
    preview: (
      <div className="flex flex-col gap-3 p-6 h-full justify-center">
        <div className="flex items-center justify-between text-xs font-mono text-emerald-400/50 uppercase tracking-widest">
          <span>Human_Cost</span>
          <span>$48,000/YR</span>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "100%" }}
            whileInView={{ width: "100%" }}
            className="h-full bg-red-500/20"
          />
        </div>
        <div className="flex items-center justify-between text-xs font-mono text-primary/50 uppercase tracking-widest mt-2">
          <span>AI_Worker_Cost</span>
          <span>$14,400/YR</span>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "30%" }}
            transition={{ duration: 1.5 }}
            className="h-full bg-primary"
          />
        </div>
        <div className="mt-4 p-3 border border-primary/20 bg-primary/5 rounded-xl flex items-center justify-between">
          <span className="text-[10px] font-black text-primary uppercase italic">
            Net Savings
          </span>
          <span className="text-sm font-black text-white italic">70.0%</span>
        </div>
      </div>
    ),
  },
  {
    id: "saas",
    moduleTag: "MODULE_TYPE_02",
    category: "SaaS_Ready",
    title: "Easy Billing",
    description:
      "Transparent pricing with flexible plans that scale with your growth.",
    icon: <CreditCard className="w-5 h-5" />,
    preview: (
      <div className="p-6 flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-[180px] p-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md relative overflow-hidden group/card shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Activity className="w-4 h-4 text-primary" />
            </div>
            <div className="h-1.5 w-12 bg-white/10 rounded-full" />
          </div>
          <div className="space-y-2 mb-6">
            <div className="h-2 w-full bg-white/5 rounded-full" />
            <div className="h-2 w-2/3 bg-white/5 rounded-full" />
          </div>
          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-[9px] font-black text-white italic uppercase">
              Billed_Total
            </span>
            <span className="text-xs font-black text-primary">$249.00</span>
          </div>
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none"
          />
        </div>
      </div>
    ),
  },
  {
    id: "voice",
    moduleTag: "MODULE_TYPE_03",
    category: "Neural_Voice",
    title: "Voice Cloning",
    description:
      "Create custom AI voices for your brand that sound indistinguishable from humans.",
    icon: <Mic2 className="w-5 h-5" />,
    preview: (
      <div className="p-6 flex flex-col justify-center h-full relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-mono text-primary/50 uppercase tracking-widest">
            Neural_Sync_Active
          </span>
        </div>
        <div className="flex items-end gap-[3px] h-12 mb-6">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [10, 20 + Math.random() * 30, 10] }}
              transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
              className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-full min-h-[4px]"
            />
          ))}
        </div>
        <div className="flex items-center justify-between px-3 py-2 border border-white/5 bg-white/[0.02] rounded-lg">
          <span className="text-[9px] font-black text-gray-500 italic uppercase">
            Cloning Accuracy
          </span>
          <span className="text-[10px] font-black text-emerald-400">
            99.98%
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "data",
    moduleTag: "MODULE_TYPE_05",
    category: "RealTime_Data",
    title: "Analytics Dashboard",
    description:
      "Comprehensive reporting and insights to track every interaction in real-time.",
    icon: <BarChart3 className="w-5 h-5" />,
    preview: (
      <div className="p-6 flex flex-col justify-center h-full">
        <div className="flex items-end gap-2 h-20 mb-4 px-4 overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-1 flex flex-col justify-end gap-1">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${20 + i * 12}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="w-full bg-gradient-to-t from-primary/5 via-primary/20 to-primary/40 rounded-sm"
              />
              <div className="h-1 w-full bg-white/5 rounded-full" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 border border-white/5 bg-white/[0.01] rounded-lg text-center">
            <span className="block text-xs text-gray-500 font-mono italic">
              THROUGHPUT
            </span>
            <span className="text-[10px] font-black text-white">12.4k/sec</span>
          </div>
          <div className="p-2 border border-white/5 bg-white/[0.01] rounded-lg text-center">
            <span className="block text-xs text-gray-500 font-mono italic">
              LATENCY
            </span>
            <span className="text-[10px] font-black text-primary">14ms</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "aes",
    moduleTag: "MODULE_TYPE_06",
    category: "AES_256",
    title: "Enterprise Security",
    description:
      "Bank-grade security and compliance for your most sensitive data.",
    icon: <ShieldCheck className="w-5 h-5" />,
    preview: (
      <div className="p-6 flex flex-col items-center justify-center h-full relative">
        <div className="relative w-20 h-20 flex items-center justify-center mb-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-primary/20 rounded-full"
          />
          <ShieldCheck className="w-8 h-8 text-primary relative z-10" />
        </div>
        <div className="font-mono text-xs text-gray-600 bg-white/[0.02] px-4 py-2 rounded-lg border border-white/5 tracking-tighter text-center">
          ENCRYPT_AES_256_ACTIVE
          <br />
          <span className="text-emerald-400 opacity-50">$ SSH_TUNNEL_OK</span>
        </div>
      </div>
    ),
  },
];

const BusinessSolutions = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="solutions"
      className="py-20 md:py-32 max-w-7xl mx-auto px-6 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] mb-6 backdrop-blur-md"
          >
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
              Scale_Integrations
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white leading-[0.85] uppercase italic"
          >
            COMPLETE BUSINESS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              SOLUTION.
            </span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-[300px] text-gray-500 text-sm font-medium leading-relaxed italic"
        >
          Orchestrate hyper-efficient voice workflows at scale. Eliminate
          overhead, maximize stability.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {solutions.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative"
          >
            <div className="bg-[#0A0A0B] border border-white/[0.04] rounded-2xl overflow-hidden transition-all duration-700 hover:border-primary/30 shadow-2xl flex flex-col h-full relative group/card">
              <div className="border-beam" />
              {/* Window Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.03] bg-white/[0.01]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/20" />
                </div>
                <div className="text-[9px] font-black text-gray-600 uppercase tracking-widest font-mono">
                  {item.moduleTag}
                </div>
              </div>

              {/* Content Header Section */}
              <div className="p-8 pb-4">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-black text-white uppercase italic tracking-tighter group-hover:translate-x-1 transition-transform">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-500 text-[13px] font-medium leading-relaxed italic line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Visual Preview Container */}
              <div className="px-6 pb-6 mt-auto">
                <div className="h-48 w-full border border-white/[0.04] bg-white/[0.01] rounded-xl relative overflow-hidden group-hover:bg-white/[0.02] transition-colors duration-500">
                  {/* Grainy Noise Overlay */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

                  {/* Top Left Module Pill */}
                  <div className="absolute top-4 left-4 z-10 scale-90 origin-top-left flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">
                      VISUAL_SYNC
                    </span>
                  </div>

                  {mounted && item.preview}
                </div>
              </div>

              {/* Hover Highlight */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-700 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Zap = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export default BusinessSolutions;

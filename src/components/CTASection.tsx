"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useInView,
  animate,
  useMotionValue,
} from "framer-motion";
import {
  Rocket,
  ArrowRight,
  Zap,
  Sparkles,
  Shield,
  Globe,
  Activity,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SingularityOrb = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none">
      {/* Outer Atmospheric Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[800px] h-[800px] rounded-full bg-primary/15 blur-[140px]"
      />

      {/* Multi-layered Core */}
      <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
        {/* Rotating Ring 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-primary/20 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 backdrop-blur-[4px] shadow-[inset_0_0_50px_rgba(139,92,246,0.1)]"
        />

        {/* Rotating Ring 2 (Counter) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-blue-500/10 bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent"
        />

        {/* Inner Pulse Core */}
        <motion.div
          animate={{
            scale: [0.85, 1.15, 0.85],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-1/4 rounded-full bg-primary/40 blur-[60px]"
        />

        {/* Singularity Point */}
        <div className="absolute inset-[48%] bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,0.8),0_0_80px_rgba(139,92,246,0.6)] animate-pulse" />

        {/* Orbital Particles */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <motion.circle
            cx="50%"
            cy="50%"
            r="48%"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 15"
            className="text-primary/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="40%"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="1 20"
            className="text-blue-400/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    </div>
  );
};

interface MinimalCalculatorProps {
  agentCount: number;
  setAgentCount: (val: number) => void;
  avgSalary: number;
  setAvgSalary: (val: number) => void;
  savings: { yearly: number };
}

const MinimalCalculator = ({
  agentCount,
  setAgentCount,
  avgSalary,
  setAvgSalary,
  savings,
}: MinimalCalculatorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-14 bg-white/[0.02] border border-white/10 relative overflow-hidden group backdrop-blur-2xl transition-all duration-700 hover:border-primary/30"
    >
      <div className="border-beam" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 w-full space-y-12">
          <div className="space-y-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-white/40">
                Human_Nodes
              </span>
              <span className="text-2xl font-display font-black text-white italic">
                {agentCount}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={agentCount}
              onChange={(e) => setAgentCount(parseInt(e.target.value))}
              className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-white/40">
                Overhead_Factor
              </span>
              <span className="text-2xl font-display font-black text-white italic">
                ₹{(avgSalary / 1000).toFixed(0)}k
              </span>
            </div>
            <input
              type="range"
              min="20000"
              max="120000"
              step="1000"
              value={avgSalary}
              onChange={(e) => setAvgSalary(parseInt(e.target.value))}
              className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>

        <div className="hidden lg:block w-px h-32 bg-white/10" />

        <div className="flex-1 text-center lg:text-left">
          <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
            <Shield className="w-3.5 h-3.5 text-primary/60" />
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-white/60">
              Est_Annual_Yield
            </span>
          </div>
          <div className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter italic drop-shadow-[0_10px_30px_rgba(139,92,246,0.3)]">
            ₹{(savings.yearly / 1000000).toFixed(1)}M
          </div>
          <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 text-[10px] font-mono font-black text-emerald-500 uppercase tracking-widest">
            <Activity className="w-4 h-4 animate-pulse" />
            Optimization: Optimal
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CTASection = () => {
  const [agentCount, setAgentCount] = useState(12);
  const [avgSalary, setAvgSalary] = useState(48000);
  const [savings, setSavings] = useState({ monthly: 0, yearly: 0 });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const AITELZ_MONTHLY_COST = 19999;
  const AITELZ_YEARLY_COST = 219989;

  useEffect(() => {
    const humanMonthlyCost = agentCount * avgSalary;
    const humanYearlyCost = humanMonthlyCost * 12;
    const monthlySavings = humanMonthlyCost - AITELZ_MONTHLY_COST;
    const yearlySavings = humanYearlyCost - AITELZ_YEARLY_COST;

    setSavings({
      monthly: monthlySavings > 0 ? monthlySavings : 0,
      yearly: yearlySavings > 0 ? yearlySavings : 0,
    });
  }, [agentCount, avgSalary]);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-20 md:py-64 overflow-hidden bg-[#020203]"
    >
      {/* Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />

        {/* Subtle Moving Gradients */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full opacity-30"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Small Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] mb-12 backdrop-blur-md"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
          <span className="text-xs font-black uppercase tracking-[0.4em] text-white/60">
            Ready to Scale
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold tracking-tighter text-white leading-[0.9] mb-12 max-w-5xl mx-auto"
        >
          TRANSFORM{" "}
          <span className="text-primary italic font-black">OPERATIONS.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/40 max-w-2xl mx-auto mb-20 font-medium leading-relaxed"
        >
          Orchestrate hyper-efficient voice workflows at scale. <br />
          Eliminate overhead, maximize stability.
        </motion.p>

        {/* Singularity Focal Point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl -z-10 opacity-60">
          <SingularityOrb />
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-32 md:mb-40"
        >
          <button className="w-full sm:w-auto flex items-center justify-center group relative px-8 py-5 md:px-14 md:py-7 bg-white text-black font-black text-[12px] uppercase tracking-[0.3em] overflow-hidden hover:scale-105 active:scale-95 transition-all duration-500">
            Initialize Setup
            <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>

          <button className="w-full sm:w-auto flex items-center justify-center group px-8 py-5 md:px-14 md:py-7 border border-white/10 bg-white/[0.02] backdrop-blur-xl text-white/60 font-black text-[12px] uppercase tracking-[0.3em] hover:bg-white/[0.05] hover:text-white transition-all duration-500">
            Documentation
          </button>
        </motion.div>

        {/* Minimalist Calculator */}
        <div className="max-w-4xl mx-auto">
          <MinimalCalculator
            agentCount={agentCount}
            setAgentCount={setAgentCount}
            avgSalary={avgSalary}
            setAvgSalary={setAvgSalary}
            savings={savings}
          />
        </div>
      </div>

      {/* Bottom Decor */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_20px_rgba(139,92,246,0.1)]" />
    </section>
  );
};

export default CTASection;

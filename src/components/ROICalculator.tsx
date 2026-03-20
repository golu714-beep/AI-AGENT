"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import {
  Users,
  Zap,
  ArrowRight,
  Sparkles,
  Cpu,
  ArrowUpRight,
  MinusCircle,
  Activity,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Animated Number Counter ─── */
const NumberTicker = ({
  value,
  prefix = "",
  suffix = "",
  decimalPlaces = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
}) => {
  const spring = useSpring(0, { mass: 1, stiffness: 100, damping: 20 });
  const displayValue = useTransform(spring, (current) => {
    const formatted = new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: decimalPlaces,
    }).format(Number(current.toFixed(decimalPlaces)));
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{displayValue}</motion.span>;
};

/* ─── Comparison Card Component ─── */
const ComparisonCard = ({
  type,
  icon: Icon,
  badge,
  title,
  subtitle,
  items,
  footer,
  delay,
}: {
  type: "manual" | "ai";
  icon: React.ElementType;
  badge: string;
  title: string;
  subtitle: string;
  items: { text: string; icon: React.ElementType }[];
  footer?: React.ReactNode;
  delay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isAI = type === "ai";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`,
    );
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, x: isAI ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative group rounded-[2rem] overflow-hidden transition-all duration-700",
        isAI
          ? "bg-gradient-to-b from-primary/[0.08] to-primary/[0.02] border border-primary/20 hover:border-primary/40 shadow-[0_0_60px_rgba(139,92,246,0.06)]"
          : "bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12]",
      )}
    >
      {/* Hardware Slab Header */}
      <div
        className={cn(
          "px-5 py-3 flex items-center justify-between border-b relative overflow-hidden",
          isAI
            ? "border-primary/15 bg-primary/[0.04]"
            : "border-white/[0.06] bg-white/[0.01]",
        )}
      >
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all",
                isAI
                  ? "bg-primary shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                  : "bg-red-500/40",
              )}
            />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
          </div>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-[8px] font-tactical font-bold text-white/60 tracking-[0.3em] uppercase">
            {isAI ? "NODE_AI_OPT" : "NODE_LEGACY"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Activity
            className={cn(
              "w-3 h-3",
              isAI ? "text-primary animate-pulse" : "text-gray-700",
            )}
          />
          <span className="text-[7px] font-tactical text-gray-500 font-bold uppercase tracking-widest">
            {isAI ? "v4.2" : "v1.0"}
          </span>
        </div>
        {/* Sweep animation */}
        <motion.div
          animate={{ left: ["-100%", "200%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className={cn(
            "absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-transparent pointer-events-none",
            isAI ? "via-primary/10" : "via-white/5",
          )}
        />
      </div>

      {/* Card Body */}
      <div className="p-6 md:p-10">
        <div className="flex items-center justify-between mb-8">
          <div
            className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500",
              isAI
                ? "bg-primary/15 border-primary/25 shadow-[0_0_25px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]"
                : "bg-white/[0.03] border-white/[0.08]",
            )}
          >
            <Icon
              className={cn("w-6 h-6", isAI ? "text-primary" : "text-gray-500")}
            />
          </div>
          <span
            className={cn(
              "text-[9px] font-tactical font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border",
              isAI
                ? "text-primary bg-primary/10 border-primary/20 animate-pulse"
                : "text-gray-600 bg-white/[0.03] border-white/[0.06]",
            )}
          >
            {badge}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-accent font-black text-white mb-2 uppercase italic tracking-tight">
          {title}
        </h3>
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">{subtitle}</p>

        <div className="space-y-3.5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.1 + i * 0.08 }}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300",
                isAI
                  ? "bg-primary/[0.04] border-primary/10 hover:bg-primary/[0.08] hover:border-primary/20 text-white/80"
                  : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03] text-gray-400",
              )}
            >
              <item.icon
                className={cn(
                  "w-4 h-4 shrink-0",
                  isAI ? "text-primary" : "text-red-500/50",
                )}
              />
              <span className="text-sm font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {footer && (
          <div className="mt-8 pt-6 border-t border-primary/15">{footer}</div>
        )}
      </div>

      {/* Mouse Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${isAI ? "rgba(139, 92, 246, 0.08)" : "rgba(255, 255, 255, 0.03)"}, transparent 60%)`,
        }}
      />
    </motion.div>
  );
};

/* ─── Custom Slider Component ─── */
const PremiumSlider = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
  displayValue,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  displayValue: string;
}) => {
  const progress = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-end">
        <span className="text-xs font-tactical font-bold text-gray-400 uppercase tracking-[0.15em]">
          {label}
        </span>
        <span className="text-2xl md:text-3xl font-display font-black text-white italic tracking-tight">
          {displayValue}
        </span>
      </div>
      <div className="relative h-2 bg-white/[0.06] rounded-full group/slider">
        {/* Filled track with glow */}
        <motion.div
          className="absolute h-full bg-gradient-to-r from-primary/80 to-primary rounded-full shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          style={{ width: `${progress}%` }}
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        {/* Native range input (invisible but functional) */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
        />
        {/* Visible thumb */}
        <div
          className="absolute w-5 h-5 bg-white rounded-full shadow-[0_0_12px_rgba(139,92,246,0.4),0_2px_8px_rgba(0,0,0,0.5)] pointer-events-none -top-1.5 flex items-center justify-center transition-all duration-150 group-hover/slider:scale-110"
          style={{ left: `calc(${progress}% - 10px)` }}
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </div>
    </div>
  );
};

/* ─── Main Component ─── */
const ROICalculator = () => {
  const [agentCount, setAgentCount] = useState(5);
  const [avgSalary, setAvgSalary] = useState(25000);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const AI_COST_PER_AGENT = 19999;
  const bonus = 19999;

  const monthlyHumanCost = agentCount * avgSalary;
  const monthlyAICost = agentCount * AI_COST_PER_AGENT;
  const monthlySavings = monthlyHumanCost - monthlyAICost;
  const totalYearlySavings = monthlySavings * 12 + bonus;

  if (!mounted) return null;

  return (
    <section
      id="roi-calculator"
      className="py-20 md:py-32 bg-[#050505] relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,0.04),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.08]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/[0.08] border border-primary/15 text-primary text-xs font-tactical font-black uppercase tracking-[0.3em] mb-6"
          >
            <Zap className="w-3.5 h-3.5 fill-primary" />
            Efficiency Matrix
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight mb-5 uppercase leading-[0.95]"
          >
            MAXIMIZE YOUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary italic">
              PROFIT MARGINS.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Compare the traditional staffing model with Aitelz AI efficiency.
            See exactly how much you can save per year.
          </motion.p>
        </div>

        {/* ── Comparison Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8">
          <ComparisonCard
            type="manual"
            icon={Users}
            badge="Manual Staffing"
            title="Traditional Team"
            subtitle="High overheads, limited hours, and linear costs."
            delay={0}
            items={[
              { text: "8-Hour Work Cycle", icon: MinusCircle },
              { text: "Management Overheads", icon: MinusCircle },
              { text: "Linear Scaling Costs", icon: MinusCircle },
              { text: "Hiring & Training Lag", icon: MinusCircle },
            ]}
          />

          <ComparisonCard
            type="ai"
            icon={Cpu}
            badge="AI Optimized"
            title="Aitelz AI Nodes"
            subtitle="24/7 Availability, instant scaling, fixed low cost."
            delay={0.1}
            items={[
              { text: "24/7/365 Active Cycle", icon: ArrowUpRight },
              { text: "Zero Management Fee", icon: ArrowUpRight },
              { text: "Instant Elastic Scaling", icon: ArrowUpRight },
              { text: "Bank-Grade Consistency", icon: ArrowUpRight },
            ]}
            footer={
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-tactical font-black text-primary/50 uppercase tracking-[0.2em]">
                  Fixed Pricing
                </span>
                <span className="text-2xl font-display font-black text-white italic">
                  ₹19,999
                  <span className="text-xs text-primary/40 not-italic ml-1">
                    /mo
                  </span>
                </span>
              </div>
            }
          />
        </div>

        {/* ── Savings Simulator ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2.5rem] bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.12] transition-all duration-700 overflow-hidden relative group"
        >
          {/* Subtle top border highlight */}
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="p-6 md:p-12">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-20 items-center">
              {/* Left: Sliders */}
              <div className="space-y-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[9px] font-tactical font-black text-primary uppercase tracking-[0.3em]">
                      Interactive
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-accent font-black text-white mb-3 uppercase italic tracking-tight">
                    Savings Simulator
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Adjust the sliders to see your potential annual yield with
                    Aitelz AI.
                  </p>
                </div>

                <div className="space-y-8">
                  <PremiumSlider
                    label="Number of Agents"
                    value={agentCount}
                    min={1}
                    max={50}
                    step={1}
                    onChange={setAgentCount}
                    displayValue={String(agentCount)}
                  />

                  <PremiumSlider
                    label="Avg. Monthly Salary"
                    value={avgSalary}
                    min={12000}
                    max={100000}
                    step={1000}
                    onChange={setAvgSalary}
                    displayValue={`₹${avgSalary / 1000}k`}
                  />
                </div>
              </div>

              {/* Right: Results Panel */}
              <div className="relative rounded-[2rem] bg-gradient-to-br from-primary/[0.1] via-primary/[0.06] to-primary/[0.02] p-6 sm:p-10 lg:p-12 border border-primary/20 overflow-hidden group/res">
                {/* ROI Watermark */}
                <div className="absolute -bottom-6 -right-4 text-[10rem] font-display font-black text-primary/[0.04] select-none pointer-events-none leading-none">
                  ROI
                </div>
                {/* Subtle glow orb */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative z-10 space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="w-3.5 h-3.5 text-primary/60" />
                      <span className="text-[9px] font-tactical font-black text-primary uppercase tracking-[0.3em]">
                        Estimated Yearly Savings
                      </span>
                    </div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tighter italic drop-shadow-[0_4px_20px_rgba(139,92,246,0.25)]">
                      <NumberTicker value={totalYearlySavings} prefix="₹" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/15 text-emerald-400"
                    >
                      <Sparkles className="w-4 h-4 fill-emerald-400 shrink-0" />
                      <span className="text-xs font-tactical font-bold uppercase tracking-wider">
                        That&apos;s 1 Month FREE included!
                      </span>
                    </motion.div>

                    <button className="w-full py-5 rounded-xl bg-primary text-white text-xs font-tactical font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.45)] relative overflow-hidden">
                      <span className="relative z-10">Initiate Deployment</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;

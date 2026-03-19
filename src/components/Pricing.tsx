"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { Check, ShieldCheck, Headphones, Sparkles, ArrowRight, Zap, Globe, Layers, Cpu, Shield, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const NumberTicker = ({ value, prefix = "", suffix = "", decimalPlaces = 0 }: { value: number, prefix?: string, suffix?: string, decimalPlaces?: number }) => {
    const spring = useSpring(0, { mass: 1, stiffness: 100, damping: 20 });
    const displayValue = useTransform(spring, (current) => {
        const formatted = new Intl.NumberFormat('en-IN', {
            maximumFractionDigits: decimalPlaces
        }).format(Number(current.toFixed(decimalPlaces)));
        return `${prefix}${formatted}${suffix}`;
    });

    useEffect(() => {
        spring.set(value);
    }, [value, spring]);

    return <motion.span>{displayValue}</motion.span>;
};

const plans = [
  {
    id: "pilot",
    name: "Ait_Pilot_v1",
    label: "1-Week Pilot",
    monthlyPrice: 4999,
    yearlyPrice: 4999,
    subtext: "one-time",
    description: "Perfect for validating AI synergy with your existing workflow.",
    buttonText: "Initiate Pilot",
    buttonColor: "bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/20 text-emerald-400",
    features: [
      "Private Knowledge Base",
      "Train on Top 25 FAQs",
      "Overall testing (1 week)",
      "Full transcripts & logs"
    ],
    accent: "emerald",
    highlight: false,
    icon: <Zap className="w-5 h-5 text-emerald-500" />,
    nodeId: "PLT-7x1"
  },
  {
    id: "small",
    name: "Ait_Core_S",
    label: "Professional",
    monthlyPrice: 19999,
    yearlyPrice: 15999,
    subtext: "/month",
    description: "Advanced automation for growing teams and startups.",
    buttonText: "Deploy Now",
    buttonColor: "bg-white/5 hover:bg-white/10 border-white/10 text-white",
    stats: [
      { label: "MINUTES", value: 2000 },
      { label: "CONCURRENT", value: 10 }
    ],
    accent: "white",
    highlight: false,
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    nodeId: "COR-S02"
  },
  {
    id: "medium",
    name: "Ait_Core_M",
    label: "Growth Elite",
    monthlyPrice: 69999,
    yearlyPrice: 55999,
    subtext: "/month",
    description: "Scale your customer operations with high-density AI nodes.",
    badge: "MOST POPULAR",
    buttonText: "Scale Now",
    buttonColor: "bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 text-white border-primary/20",
    stats: [
      { label: "MINUTES", value: 10000 },
      { label: "CONCURRENT", value: 20 }
    ],
    accent: "primary",
    highlight: true,
    icon: <Layers className="w-5 h-5 text-primary" />,
    nodeId: "COR-M05"
  },
  {
    id: "large",
    name: "Ait_Core_L",
    label: "Enterprise",
    monthlyPrice: 199999,
    yearlyPrice: 159999,
    subtext: "/month",
    description: "Custom-built infrastructure for global scale and compliance.",
    buttonText: "Contact Sales",
    buttonColor: "bg-white/5 hover:bg-white/10 border-white/10 text-white",
    stats: [
      { label: "MINUTES", value: 35000 },
      { label: "CONCURRENT", value: 50 }
    ],
    accent: "white",
    highlight: false,
    icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
    nodeId: "COR-L08"
  }
];

const PricingCard = ({ plan, isYearly, index }: { plan: typeof plans[0], isYearly: boolean, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex flex-col h-full rounded-[2rem] p-[1px] transition-all duration-700",
        plan.highlight ? "bg-gradient-to-b from-primary/50 to-primary/5 scale-[1.02] z-10 shadow-3xl" : "bg-white/5 hover:bg-white/10"
      )}
    >
      <div className="flex flex-col h-full bg-[#050506] rounded-none overflow-hidden relative">
        {/* Intelligence OS Card Header - Hardware Slab Style */}
        <div className="px-3 py-1.5 flex items-center justify-between border-b border-white/10 bg-[#080809] relative group/hheader">
            <div className="flex items-center gap-6">
                <div className="flex gap-1.5 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="w-2.5 h-2.5 rounded-none bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                    <div className="w-2.5 h-2.5 rounded-none bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-none bg-white/5" />
                </div>
                <div className="h-6 w-[px] bg-white/10" />
                <div className="flex flex-col">
                    <span className="text-[10px] font-black font-mono text-white/90 tracking-[0.3em] uppercase leading-none">{plan.nodeId}</span>
                    <span className="text-[7px] font-mono text-primary/40 tracking-[0.2em] font-bold mt-1 uppercase italic leading-none">NODE_STATUS: ONLINE</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-primary/20 animate-pulse group-hover/hheader:text-primary transition-colors" />
                <div className="w-px h-6 bg-white/5 mx-2" />
                <span className="text-[9px] font-mono text-gray-500 font-bold uppercase tracking-widest leading-none">v4.2</span>
            </div>
            {/* Header Laser Sweep */}
            <motion.div 
              animate={{ left: ["-100%", "200%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none"
            />
        </div>

        {/* Card Header Content */}
        <div className="px-3 pt-2 pb-1 text-left">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded-xl bg-white/[0.03] border border-white/10 shadow-inner group-hover:border-primary/30 transition-colors duration-500">
              {React.cloneElement(plan.icon as React.ReactElement<{ className?: string }>, { className: "w-3.5 h-3.5" })}
            </div>
            {plan.badge ? (
              <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-white text-xs font-black tracking-[0.2em] uppercase animate-pulse">
                {plan.badge}
              </span>
            ) : (
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <div className="w-1 h-1 rounded-full bg-gray-800" />
                    Secure Tier
                </div>
            )}
          </div>
          
          <h3 className="text-[12px] font-bold text-gray-400 tracking-widest uppercase mb-1">{plan.label}</h3>
          <h4 className="text-[10px] font-mono text-white/40 tracking-widest mb-3 flex items-center gap-2">
            <Cpu className="w-2.5 h-2.5 opacity-50" />
            {plan.name}
          </h4>
          
          <div className="flex items-end gap-1 mb-1">
             <div className="text-xl md:text-2xl font-bold text-white tracking-tighter">
                <NumberTicker 
                    value={isYearly ? plan.yearlyPrice : plan.monthlyPrice} 
                    prefix="₹" 
                />
             </div>
             <span className="text-gray-500 text-[11px] font-bold mb-1">{plan.subtext}</span>
          </div>
          
          <p className="text-gray-500 text-[12px] leading-relaxed font-medium min-h-[44px]">
            {plan.description}
          </p>
        </div>

        {/* Features / Stats */}
        <div className="px-3 pb-3 flex-grow">
          <div className="bg-white/5 border border-white/10 p-3 rounded-none mb-2 relative overflow-hidden group/mheader">
             <div className="flex justify-between items-center relative z-10">
                <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.4em]">Resource_Allocation</span>
                <span className="text-[9px] font-mono text-primary/40 uppercase">AIT_CERT_v2</span>
             </div>
             <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent bottom-0"
             />
          </div>
          
          {plan.features ? (
            <div className="space-y-3">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 group/feat">
                  <div className="mt-0.5 w-3.5 h-3.5 rounded bg-emerald-500/5 flex items-center justify-center shrink-0 border border-emerald-500/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all">
                    <Check className="w-2 h-2 text-emerald-500" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-500 group-hover/feat:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {plan.stats?.map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] group/stat hover:bg-white/[0.04] transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-primary/20 group-hover/stat:bg-primary transition-colors" />
                  <span className="text-[9px] font-black text-gray-600 tracking-widest uppercase mb-1 flex items-center gap-1.5">
                    {stat.label === "MINUTES" ? <Zap className="w-2.5 h-2.5" /> : <Layers className="w-2.5 h-2.5" />}
                    {stat.label}
                  </span>
                  <div className="text-xl font-black text-white tracking-tighter">
                    <NumberTicker value={stat.value} suffix={stat.label === "MINUTES" ? "" : "+"} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-3 pb-3 mt-auto">
          <button className={cn(
            "w-full py-4 rounded-xl text-[13px] font-black tracking-[0.2em] uppercase transition-all duration-500 flex items-center justify-center gap-2.5 border shadow-2xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group/btn",
            plan.buttonColor
          )}>
            <span className="relative z-10">{plan.buttonText}</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Mouse Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
          style={{
              background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), ${plan.accent === 'primary' ? 'rgba(139, 92, 246, 0.08)' : 'rgba(255, 255, 255, 0.04)'}, transparent 60%)`
          }}
        />
        
        {/* Animated Scanline for Highlighted Card */}
        {plan.highlight && (
           <motion.div 
             animate={{ y: ["-100%", "200%"] }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-0 pointer-events-none"
           />
        )}
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Visual Background (Scanlines & Grids) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.02),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.1]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent animate-scanline" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-primary font-black uppercase text-[11px] mb-4 tracking-[0.4em] bg-primary/5 px-4 py-1 rounded-full border border-primary/10"
          >
            <Sparkles className="w-2.5 h-2.5" />
            System Economics
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black text-white tracking-tight leading-[0.9] mb-8 max-w-3xl"
          >
            PRECISION <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">SCALING MODELS.</span>
          </motion.h2>
          <p className="text-gray-500 text-[13px] font-medium max-w-md mb-8 leading-relaxed opacity-80">
            Highly optimized deployment tiers for enterprise autonomous operations. 
            Choose your throughput and scale instantly.
          </p>
          
          {/* Refined Toggle - Tactical Mode Switcher */}
          <div className="p-1.5 md:p-2 bg-black border border-white/10 rounded-none flex items-center gap-2 backdrop-blur-3xl relative group/switcher">
            {/* Switch Decoration */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 opacity-20">
                <div className="w-px h-6 bg-primary/40" />
                <span className="text-[5px] font-mono text-primary uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>MODE_SYS</span>
            </div>
            <button 
                onClick={() => setIsYearly(false)}
                className={cn(
                    "relative px-6 py-2 rounded-none text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-700 overflow-hidden",
                    !isYearly ? "text-black mix-blend-difference" : "text-gray-600 hover:text-white"
                )}
            >
                <span className="relative z-10">Standard</span>
                {!isYearly && <motion.div layoutId="toggle-bg" className="absolute inset-0 bg-white" />}
            </button>
            
            <div className="w-px h-4 bg-white/10" />
            <button 
                onClick={() => setIsYearly(true)}
                className={cn(
                    "relative px-6 py-2 rounded-none text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-700 flex items-center gap-2 overflow-hidden",
                    isYearly ? "text-black mix-blend-difference" : "text-gray-600 hover:text-white"
                )}
            >
                <span className="relative z-10">Optimized</span>
                {isYearly && <motion.div layoutId="toggle-bg" className="absolute inset-0 bg-white" />}
                <span className={cn("relative z-20 px-2 py-0.5 rounded-none text-[10px] font-black border transition-colors", isYearly ? "bg-emerald-500 text-white border-emerald-400" : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20")}>
                    -20%
                </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} isYearly={isYearly} index={index} />
          ))}
        </div>

        {/* Enterprise / Support Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group h-full max-w-5xl mx-auto"
        >
            <div className="relative z-10 p-0.5 bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:border-primary/20 transition-colors duration-700">
                <div className="bg-[#0A0A0B]/80 backdrop-blur-3xl rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                    {/* Background Visual for CTA */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[80px] rounded-full group-hover:opacity-100 opacity-50 transition-opacity" />
                    
                    <div className="flex items-center gap-8 relative z-10">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-white/[0.02] flex items-center justify-center text-primary border border-white/10 shadow-inner shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                                <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">Enterprise Protocol</span>
                            </div>
                            <h4 className="text-white text-xl font-bold tracking-tight mb-1">Custom Implementation</h4>
                            <p className="text-gray-500 text-[13px] font-medium max-w-md leading-relaxed">
                                Dedicated support architects for large-scale production deployments and complex workflow integrations.
                            </p>
                        </div>
                    </div>
                    <button className="whitespace-nowrap px-8 py-4 rounded-xl bg-white text-black text-[13px] font-black tracking-widest uppercase hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-2xl relative z-10">
                        <Headphones className="w-4 h-4" />
                        Consult Architecture
                    </button>
                    
                    {/* Corner Tag */}
                    <div className="absolute top-4 right-8 flex items-center gap-2 opacity-20 group-hover:opacity-50 transition-opacity">
                        <Shield className="w-3 h-3 text-gray-400" />
                        <span className="text-[9px] font-mono text-gray-500 font-bold uppercase">SLA_VERIFIED</span>
                    </div>
                </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

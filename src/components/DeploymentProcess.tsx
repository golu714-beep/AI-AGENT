"use client";

import React from "react";
import { motion } from "framer-motion";
import { Upload, Brain, PhoneCall, TestTube, Rocket, BarChart3, ChevronRight, Activity, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Create Your Account",
    description: "Sign up and get instant access to your AI calling dashboard",
    icon: <Upload className="w-5 h-5 text-blue-400" />,
    metrics: { time: "2 min", type: "Setup" },
    tag: "STEP_01"
  },
  {
    id: 2,
    title: "Setup Phone Numbers",
    description: "Configure your business phone numbers and call routing",
    icon: <PhoneCall className="w-5 h-5 text-cyan-400" />,
    metrics: { time: "10 min", type: "Config" },
    tag: "STEP_02"
  },
  {
    id: 3,
    title: "Configure AI Agents",
    description: "Set up your AI calling agents with custom scripts and workflows",
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    metrics: { time: "15 min", type: "AI" },
    tag: "STEP_03"
  },
  {
    id: 4,
    title: "Import Your Contacts",
    description: "Upload your customer database and organize calling campaigns",
    icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
    metrics: { time: "5 min", type: "Data" },
    tag: "STEP_04"
  },
  {
    id: 5,
    title: "Launch Your Campaigns",
    description: "Go live with your AI calling campaigns and start automating",
    icon: <Rocket className="w-5 h-5 text-primary" />,
    metrics: { time: "5 min", type: "Live" },
    tag: "STEP_05"
  }
];

const DeploymentProcess = () => {
  return (
    <section className="py-16 md:py-48 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-primary font-black uppercase text-xs mb-4 tracking-[0.4em]"
            >
              <Zap className="w-3 h-3" />
              Total Setup Time: ~37 minutes
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white leading-[0.85] uppercase italic"
            >
                AI ACTIVATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">PROTOCOL.</span>
            </motion.h2>
          </div>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] max-w-xs leading-relaxed opacity-60">
            From signup to your first automated call - complete setup in under 40 minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[60px] left-0 right-0 h-px bg-white/5 z-0" />

            {steps.map((step, index) => (
                <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group h-full"
                >
                    {/* Node */}
                    <div className="flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-8 relative z-10 px-2">
                            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary/10 shadow-2xl group-hover:scale-110">
                                {React.cloneElement(step.icon as any, { className: "w-6 h-6" })}
                            </div>
                            <div className="h-px flex-1 bg-white/10 md:hidden" />
                        </div>

                        <div className="flex-1 p-[1px] rounded-[1.5rem] md:rounded-[2rem] bg-white/5 hover:bg-white/10 transition-all duration-700 group/link overflow-hidden relative">
                            <div className="border-beam" />
                            <div className="h-full bg-[#050506] p-5 md:p-6 border border-white/10 group-hover:border-primary/20 transition-all duration-500 rounded-[1.5rem] md:rounded-[2rem] relative overflow-hidden flex flex-col group/card">
                            {/* Visual Scanline */}
                            <motion.div 
                                animate={{ top: ["-10%", "110%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                                className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent z-0 pointer-events-none"
                            />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] font-mono text-primary/60 font-bold tracking-[0.2em]">{step.tag}</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover/card:bg-primary transition-colors" />
                                </div>
                                <h3 className="text-base font-black text-white mb-4 tracking-tight uppercase group-hover/card:text-primary transition-colors">
                                    {step.title.replace('_', ' ')}
                                </h3>
                                <p className="text-gray-400 text-xs font-medium leading-relaxed mb-8 opacity-90 flex-1">
                                    {step.description}
                                </p>

                                <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6 mt-auto">
                                    {Object.entries(step.metrics).map(([k, v], i) => (
                                        <div key={i} className="flex flex-col gap-1">
                                            <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{k}</span>
                                            <span className="text-sm font-black text-white/80 font-mono tracking-tighter group-hover/card:text-white transition-colors">{v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DeploymentProcess;

"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import {
  Target,
  Headset,
  CalendarDays,
  Briefcase,
  ArrowRight,
  Sparkles,
  Activity,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

const StatTicker = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Parse numeric value and suffix (e.g., "70%" -> 70, "%" or "5x" -> 5, "x")
  const match = value.match(/(\d+)(.*)/);
  const numValue = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : "";

  const spring = useSpring(0, { mass: 1, stiffness: 75, damping: 15 });
  const displayValue = useTransform(spring, (current) => {
    return `${Math.round(current)}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numValue);
    }
  }, [isInView, numValue, spring]);

  return (
    <div ref={ref} className="flex flex-col gap-0.5">
      <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest flex items-center gap-1.5">
        <div className="w-1 h-1 rounded-full bg-gray-800" />
        {label}
      </span>
      <motion.span className="text-lg font-black text-white tracking-tighter">
        {displayValue}
      </motion.span>
    </div>
  );
};

const useCases = [
  {
    id: "01",
    title: "Lead Generation",
    description: "AI-powered prospect qualification protocols.",
    icon: <Target className="w-5 h-5" />,
    stats: "5x more qualified leads",
    accent: "rgb(236, 72, 153)", // Pink
    tag: "CASE_GEN_01",
    nodeCode: "LEAD_PROTO_X1",
  },
  {
    id: "02",
    title: "Customer Support",
    description: "24/7 autonomous customer service nodes.",
    icon: <Headset className="w-5 h-5" />,
    stats: "70% cost reduction",
    accent: "rgb(59, 130, 246)", // Blue
    tag: "CASE_SUP_02",
    nodeCode: "SUPP_CORE_V2",
  },
  {
    id: "03",
    title: "Appointment Booking",
    description: "Automated high-precision scheduling system.",
    icon: <CalendarDays className="w-5 h-5" />,
    stats: "90% booking accuracy",
    accent: "rgb(6, 182, 212)", // Cyan
    tag: "CASE_BKG_03",
    nodeCode: "SCHED_NODE_S3",
  },
  {
    id: "04",
    title: "Sales Automation",
    description: "Intelligent autonomous sales follow-ups.",
    icon: <Briefcase className="w-5 h-5" />,
    stats: "300% conversion boost",
    accent: "rgb(251, 146, 60)", // Orange
    tag: "CASE_SLS_04",
    nodeCode: "SALES_DELTA_M4",
  },
];

const UseCaseCard = ({
  useCase,
  index,
}: {
  useCase: (typeof useCases)[0];
  index: number;
}) => {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col h-full rounded-[2rem] p-[1px] bg-white/5 hover:bg-white/10 transition-all duration-700"
    >
      <div className="flex flex-col h-full bg-[#050506] rounded-none overflow-hidden relative border border-white/10 group-hover:border-primary/20 transition-colors duration-700">
        {/* Tactical Header - Node Branding */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-white/[0.05] bg-[#080809] relative overflow-hidden group/nheader">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-none bg-primary shadow-[0_0_8px_rgba(139,92,246,0.3)]" />
              <div className="w-1.5 h-1.5 rounded-none bg-white/10" />
            </div>
            <span className="text-[7px] font-mono text-gray-500 group-hover:text-primary transition-colors uppercase tracking-[0.3em] font-black">
              {useCase.nodeCode}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-gray-600 tracking-[0.2em] font-bold uppercase">
              {useCase.tag}
            </span>
            <div className="w-px h-4 bg-white/5 mx-2" />
            <Activity className="w-3 h-3 text-primary/20 animate-pulse group-hover/nheader:text-primary/40" />
          </div>
          {/* Header Light Sweep */}
          <motion.div
            animate={{ left: ["-100%", "200%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none"
          />
        </div>

        <div className="p-8 flex flex-col h-full relative z-10 bg-[#060607]">
          <div className="mb-6 relative">
            <div className="w-14 h-14 rounded-none bg-white/[0.02] border border-white/10 flex items-center justify-center mb-8 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-700 relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              {React.cloneElement(useCase.icon as any, {
                className: "w-7 h-7",
                style: { color: useCase.accent },
              })}
            </div>
            <h3 className="text-xl font-black text-white mb-3 tracking-tighter uppercase flex items-center gap-3">
              {useCase.title}
              <div className="w-1.5 h-px bg-white/10" />
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              {useCase.description}
            </p>
          </div>

          <div className="mt-auto pt-8 border-t border-white/[0.05] relative">
            <div className="flex items-center justify-between">
              <StatTicker value={useCase.stats} label="Metric_Source:PEAK" />
              <div className="w-10 h-10 rounded-none bg-primary/5 border border-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 shadow-2xl">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Mouse Glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
          style={{
            background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.03), transparent 60%)`,
          }}
        />

        {/* Animated Background Element */}
        <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-5 grayscale group-hover:opacity-10 group-hover:grayscale-0 transition-all duration-700">
          <div className="scale-150 transform rotate-[-15deg]">
            {React.cloneElement(useCase.icon as any, {
              className: "w-full h-full",
              style: { color: useCase.accent },
            })}
          </div>
        </div>

        {/* Scanline */}
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.7,
          }}
          className="absolute left-0 right-0 h-1/3 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent z-0 pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

const BusinessUseCases = () => {
  return (
    <section
      id="solutions"
      className="py-20 md:py-32 bg-[#050505] relative overflow-hidden"
    >
      {/* Visual Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.1]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-scanline" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-primary font-black uppercase text-xs mb-8 tracking-[0.4em] bg-primary/5 px-6 py-2 rounded-full border border-primary/10"
          >
            <Activity className="w-3.5 h-3.5" />
            System Specialization
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white leading-[0.85] uppercase italic mb-12"
          >
            VERTICAL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              SPECIALIZATION.
            </span>
          </motion.h2>

          <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl leading-relaxed opacity-80">
            Tailored autonomous protocols designed to handle high-density
            operations across various industry verticals with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12 md:mb-20">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={useCase.id} useCase={useCase} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md relative overflow-hidden group/final text-xs uppercase font-bold tracking-widest text-gray-500">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/final:opacity-100 transition-opacity" />
            <ShieldCheck className="w-4 h-4 text-primary/50" />
            Custom solutions for
            <span className="text-white font-black">Enterprise Clients</span>
            <div className="w-px h-4 bg-white/10 mx-2" />
            <a
              href="#"
              className="text-primary font-black hover:text-primary transition-colors flex items-center gap-2 group/link"
            >
              Consult Architecture
              <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessUseCases;

"use client";

import React from "react";
import BentoCard from "./BentoCard";
import ROICalculator from "./ROICalculator";
import VoiceVisualizer from "./VoiceVisualizer";
import VoiceCoreMonitor from "./VoiceCoreMonitor";
import GlobeComponent from "./Globe";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  MessageSquare, 
  Zap, 
  Globe, 
  Calendar,
  Smartphone,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Workflow
} from "lucide-react";

const BentoGrid = () => {
  return (
    <section id="features" className="py-12 md:py-24 max-w-7xl mx-auto px-6 relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full" />
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-16 gap-10">
        <div className="max-w-3xl">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary font-mono font-black uppercase tracking-[0.4em] text-[10px] mb-8 shadow-xl"
            >
                <Workflow className="w-3.5 h-3.5" />
                Protocol Efficiency_v4.2
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-10 leading-[0.85] uppercase italic"
            >
            REDEFINING THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">PARADIGM.</span>
            </motion.h2>
        </div>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 max-w-md text-lg md:text-xl font-medium leading-relaxed mb-4 border-l-2 border-primary/20 pl-8"
        >
            Scalable, secure, and intelligent modules designed for the next era of high-frequency enterprise operations.
        </motion.p>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.3
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 lg:gap-8"
      >
        <BentoCard
          title="Voice Core Alpha"
          description="High-frequency streaming node clusters with distributed computing power and sub-100ms latency."
          icon={<Cpu className="w-7 h-7" />}
          span="md:col-span-4"
          delay={0}
          className="min-h-[320px] md:min-h-[480px] shadow-2xl overflow-hidden"
        >
          <VoiceCoreMonitor />
        </BentoCard>

        {/* New Global Card - 2 Column Span */}
        <BentoCard
            title="Global Connectivity"
            description="Autonomous presence across 12+ regions with localized intelligence protocols."
            icon={<Globe className="w-7 h-7" />}
            span="md:col-span-2"
            delay={0.1}
            className="shadow-2xl overflow-hidden h-full"
        >
            <div className="h-full flex items-center justify-center -mt-8">
              <div className="scale-75 md:scale-95">
                <GlobeComponent />
              </div>
            </div>
        </BentoCard>

        {/* Workflow Card - Move to next row or span differently */}
        <BentoCard
            title="Workflow Core"
            description="Intelligent calendar synchronization and real-time scheduling logic with zero conflict resolution."
            icon={<Calendar className="w-7 h-7" />}
            span="md:col-span-6"
            delay={0.2}
            className="shadow-2xl min-h-[180px]"
        >
            <div className="p-3 md:p-6 h-full flex flex-wrap justify-center gap-1.5 md:gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div 
                        key={i} 
                        whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.04)" }}
                        className="flex-1 min-w-[140px] flex justify-between items-center bg-white/[0.01] p-2.5 md:p-4 rounded-[0.8rem] md:rounded-[1rem] border border-white/[0.04] backdrop-blur-xl transition-all duration-300 shadow-lg group/item"
                    >
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-mono font-black text-gray-500 tracking-[0.3em] uppercase group-hover/item:text-primary transition-colors">SESS_#{(2048 * i).toString(16).toUpperCase()}</span>
                          <span className="text-[9px] font-mono text-gray-700 tracking-widest uppercase">Node_Cluster_{i}</span>
                        </div>
                        <div className="flex items-center gap-3">
                             <div className={cn("w-2 h-2 rounded-full", i === 1 ? "bg-primary animate-pulse shadow-[0_0_10px_rgba(139,92,246,0.8)]" : "bg-gray-800")} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </BentoCard>
      </motion.div>
    </section>
  );
};

export default BentoGrid;

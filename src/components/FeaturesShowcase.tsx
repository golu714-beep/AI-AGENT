"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  Zap,
  MessageSquare,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Cpu,
  Layers,
  Globe,
  Activity,
  Users,
  Settings,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: 1,
    badge: "Intelligence Core",
    title: "AI Calling Platform",
    description:
      "Complete AI-powered calling solution with advanced voice technology integration for automated customer interactions",
    points: [
      "Advanced AI powered calls",
      "Intelligent call routing and management",
      "Real-time conversation analytics",
      "Automated follow-up sequences",
    ],
    visual: {
      type: "video",
      src: "/asset/assets/campaign.mp4",
      poster: "/asset/assets/Fcampaign.png",
    },
    icon: <Phone className="w-5 h-5" />,
    accent: "blue",
  },
  {
    id: 2,
    badge: "Lead Intelligence",
    title: "Customer Management",
    description:
      "Comprehensive customer relationship management with AI-driven insights and automated workflows",
    points: [
      "Centralized customer database",
      "Automated lead qualification",
      "Customer journey tracking",
      "Personalized interaction history",
    ],
    visual: {
      type: "video",
      src: "/asset/assets/leads.mp4",
      poster: "/asset/assets/Fleads.png",
    },
    icon: <Users className="w-5 h-5" />,
    accent: "indigo",
    reversed: true,
  },
  {
    id: 3,
    badge: "Smart Workflows",
    title: "Business Automation",
    description:
      "Streamline your business processes with intelligent automation and seamless integrations",
    points: [
      "CRM integrations (Zoho, HubSpot, Salesforce)",
      "Automated appointment scheduling",
      "Custom workflow builder",
      "API integrations and webhooks",
    ],
    visual: {
      type: "video",
      src: "/asset/assets/automation.mp4",
      poster: "/asset/assets/Fworkflows.png",
    },
    icon: <Settings className="w-5 h-5" />,
    accent: "cyan",
  },
];

const FeaturesShowcase = () => {
  return (
    <section className="py-20 md:py-48 bg-[#050505] relative overflow-hidden border-y border-white/[0.02]">
      {/* Theme Mesh / Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* Large Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-primary font-black uppercase text-xs tracking-[0.5em] mb-8"
          >
            <Zap className="w-3 h-3" />
            Platform_Infrastructure
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white leading-[0.85] uppercase italic"
          >
            EVERYTHING YOU NEED{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              FOR AI SUCCESS.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            A unified system architected for scale, performance,{" "}
            <br className="hidden md:block" />
            and high-fidelity customer interactions.
          </motion.p>
        </div>

        {/* Features List */}
        <div className="space-y-20 md:space-y-64">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={cn(
                "flex flex-col gap-10 md:gap-32 items-center",
                feature.reversed ? "md:flex-row-reverse" : "md:flex-row",
              )}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-10">
                <motion.div
                  initial={{ opacity: 0, x: feature.reversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-2xl border flex items-center justify-center shadow-2xl transition-all duration-500",
                        feature.accent === "blue" &&
                          "bg-primary/10 border-primary/20 text-primary group-hover:border-primary/50",
                        feature.accent === "indigo" &&
                          "bg-secondary/10 border-secondary/20 text-secondary group-hover:border-secondary/50",
                        feature.accent === "cyan" &&
                          "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:border-cyan-500/50",
                      )}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">
                        Module_{feature.id.toString().padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                        {feature.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter uppercase leading-[0.9] italic">
                    {feature.title}.
                  </h3>

                  <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium max-w-lg">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    {feature.points.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-3 group/point"
                      >
                        <div
                          className={cn(
                            "mt-1 w-5 h-5 rounded-full flex items-center justify-center border border-white/5 bg-white/[0.02] transition-colors",
                            feature.accent === "blue" &&
                              "group-hover/point:text-primary group-hover/point:border-primary/30",
                            feature.accent === "indigo" &&
                              "group-hover/point:text-secondary group-hover/point:border-secondary/30",
                            feature.accent === "cyan" &&
                              "group-hover/point:text-cyan-400 group-hover/point:border-cyan-500/30",
                          )}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <span className="text-[13px] font-bold text-gray-500 transition-colors group-hover/point:text-white uppercase tracking-wider">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-10">
                    <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] text-white font-bold tracking-widest uppercase text-[11px] group transition-all hover:bg-white/5 hover:border-white/20">
                      System Deployment
                      <MoveUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Visual Content (OS Window Theme) */}
              <div className="flex-1 w-full max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* OS Window Frame - Tactical Hardware Slab */}
                  <div className="relative z-10 rounded-[2rem] overflow-hidden border-[1px] border-white/20 bg-black shadow-[0_80px_160px_rgba(0,0,0,0.95)]">
                    {/* Slab Side Details */}
                    <div className="absolute top-1/2 -left-[1.5px] -translate-y-1/2 w-[3px] h-32 bg-primary/40 z-20" />
                    <div className="absolute top-1/2 -right-[1.5px] -translate-y-1/2 w-[3px] h-32 bg-primary/40 z-20" />

                    {/* Tactical Header Bar */}
                    <div className="px-8 py-5 border-b border-white/10 flex items-center justify-between bg-[#080809] relative overflow-hidden group/header">
                      <div className="flex items-center gap-6">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-none bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                          <div className="w-2 h-2 rounded-none bg-white/10" />
                          <div className="w-2 h-2 rounded-none bg-white/5" />
                        </div>
                        <div className="h-4 w-[1px] bg-white/10" />
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black font-mono text-white/90 tracking-[0.3em] uppercase leading-none">
                            SYS_VIRT_ID_{feature.id}
                          </span>
                          <span className="text-[6px] font-mono text-primary/40 tracking-[0.2em] font-bold mt-1 uppercase italic leading-none">
                            STATUS::ACTIVE_SYNC
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="px-3 py-1 bg-primary/5 border border-primary/20 rounded-none text-xs font-mono text-primary font-black tracking-widest">
                          CALIBRATED
                        </div>
                        <Activity className="w-3.5 h-3.5 text-primary/40 animate-pulse" />
                      </div>
                      {/* Header Laser Sweep */}
                      <motion.div
                        animate={{ left: ["-100%", "200%"] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none"
                      />
                    </div>

                    <div className="relative aspect-[16/10] bg-[#030304] overflow-hidden group/visual">
                      <video
                        src={feature.visual.src}
                        poster={feature.visual.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-60 group-hover/visual:opacity-90 transition-all duration-1000 group-hover/visual:scale-105"
                      />

                      {/* Tactical Overlays */}
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Scan Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
                        {/* Glitch Overlay */}
                        <div className="absolute inset-0 bg-[#8b5cf6]/5 mix-blend-overlay opacity-0 group-hover/visual:opacity-100 transition-opacity" />
                        {/* Corner Brackets */}
                        <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-white/20" />
                        <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-white/20" />
                      </div>

                      {/* Real-time Data Readout (Floating) */}
                      <div className="absolute bottom-6 left-6 flex flex-col gap-1 pointer-events-none">
                        <span className="text-[7px] font-mono text-gray-500 uppercase tracking-widest">
                          Buffer_Load
                        </span>
                        <div className="flex gap-[2px]">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ opacity: [0.2, 1, 0.2] }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                              className="w-2 h-1 bg-primary/40"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Diffuse Background Glow */}
                  <div
                    className={cn(
                      "absolute -inset-10 blur-[120px] opacity-10 -z-10 transition-all duration-1000 group-hover:opacity-20 group-hover:scale-110",
                      feature.accent === "blue" && "bg-primary",
                      feature.accent === "indigo" && "bg-secondary",
                      feature.accent === "cyan" && "bg-cyan-500",
                    )}
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;

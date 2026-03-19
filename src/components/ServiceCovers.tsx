"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Globe, Activity, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const ServiceCovers = () => {
  return (
    <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden border-y border-white/[0.02]">
      {/* Tech mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 text-primary font-black uppercase text-xs mb-4 tracking-[0.5em]"
          >
            <Zap className="w-3 h-3" />
            Core_Capacities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white leading-[0.85] uppercase italic"
          >
            CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">CAPACITIES.</span>
          </motion.h2>
          <div className="h-px w-24 bg-primary/20 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Appointment Booking */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group/card relative"
          >
          <div className="p-6 md:p-12 rounded-2xl md:rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden transition-all duration-700 hover:border-primary/20 hover:bg-white/[0.02] relative">
                <div className="border-beam" />
                {/* Visual Header */}
                <div className="flex justify-between items-start mb-8 md:mb-12">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/[0.02] flex items-center justify-center border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 shadow-2xl">
                        <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="flex flex-col items-end opacity-20 group-hover:opacity-40 transition-opacity">
                        <span className="text-[8px] font-mono text-white tracking-widest uppercase mb-1">Status::Enabled</span>
                        <Activity className="w-4 h-4 text-primary" />
                    </div>
                </div>

                <div className="relative z-10">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-3 block opacity-50">Operational_01</span>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 uppercase tracking-tight">Appointment Booking</h3>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium mb-8 md:mb-10">
                        Get instantly integrated with your calendar to book calls in real-time. Full sync with G-Cal, Outlook, and specialized CRMs.
                    </p>

                    <div className="flex items-center gap-6 border-t border-white/[0.03] pt-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-[8px] font-mono text-gray-500 uppercase tracking-tighter">Latency</span>
                            <span className="text-[10px] font-bold text-gray-500 tracking-tight">0.02ms</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[8px] font-mono text-gray-500 uppercase tracking-tighter">Sync_Protocol</span>
                            <span className="text-[10px] font-bold text-gray-500 tracking-tight">HTTPS/TLS_1.3</span>
                        </div>
                    </div>
                </div>

                {/* Decorative spotlight */}
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/10 transition-colors" />
            </div>
          </motion.div>

          {/* Card 2: Global Connectivity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group/card relative"
          >
             <div className="p-6 md:p-12 rounded-2xl md:rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden transition-all duration-700 hover:border-secondary/20 hover:bg-white/[0.02] relative">
                <div className="border-beam" />
                {/* Visual Header */}
                <div className="flex justify-between items-start mb-8 md:mb-12">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/[0.02] flex items-center justify-center border border-white/5 group-hover:border-secondary/50 group-hover:bg-secondary/5 transition-all duration-500 shadow-2xl">
                        <Globe className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    </div>
                    <div className="flex flex-col items-end opacity-20 group-hover:opacity-40 transition-opacity">
                        <span className="text-[8px] font-mono text-white tracking-widest uppercase mb-1">Nodes::Provisioned</span>
                        <Zap className="w-4 h-4 text-secondary" />
                    </div>
                </div>

                <div className="relative z-10">
                    <span className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-3 block opacity-50">Bridge_Node_02</span>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 uppercase tracking-tight">Global Connectivity</h3>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium mb-8 md:mb-10">
                        Provision numbers from India, USA, UK, and 50+ other countries. Direct fiber-optic termination for zero-latency audio.
                    </p>

                    <div className="flex items-center gap-6 border-t border-white/[0.03] pt-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-[8px] font-mono text-gray-500 uppercase tracking-tighter">Avail_Regions</span>
                            <span className="text-[10px] font-bold text-gray-500 tracking-tight">GLOBAL_52+</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[8px] font-mono text-gray-500 uppercase tracking-tighter">Security_Hash</span>
                            <span className="text-[10px] font-bold text-gray-500 tracking-tight">AES_256_GCM</span>
                        </div>
                    </div>
                </div>

                {/* Decorative spotlight */}
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-secondary/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-secondary/10 transition-colors" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCovers;

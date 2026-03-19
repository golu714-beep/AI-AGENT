"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, Activity, Terminal, Shield } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Head of Support, Nexus",
    content: "Bento-Glow AI has completely overhauled how we handle customer surges. The predictive engine is like having a crystal ball for support tickets.",
    avatar: "AR"
  },
  {
    name: "Sarah Chen",
    role: "CEO, Stellar",
    content: "The bento design is not just beautiful, it's functional. Our team adapted in hours, and our response times dropped by 45%.",
    avatar: "SC"
  },
  {
    name: "Marcus Thorne",
    role: "CX Director, Hyperion",
    content: "Omnichannel that actually works. Integrating WhatsApp and Email in one stream was a game changer for our global team.",
    avatar: "MT"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.03),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] opacity-[0.1]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-32 gap-10">
            <div className="max-w-3xl">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary font-mono font-black uppercase tracking-[0.4em] text-[10px] mb-8 shadow-xl"
                >
                    <Activity className="w-3.5 h-3.5" />
                    Network Validation
                </motion.div>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-7xl font-display font-black text-white tracking-tighter mb-4 uppercase italic"
                >
                    VERIFIED BY THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">GLOBAL NETWORK.</span>
                </motion.h2>
            </div>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-gray-500 max-w-sm text-lg font-medium leading-relaxed border-l-2 border-primary/20 pl-8 mb-4"
            >
                Real-time performance metrics from our distributed enterprise node clusters.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative"
            >
                {/* Hardware Frame Styling */}
                <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-none opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative h-full bg-[#080809] p-6 md:p-8 flex flex-col gap-8 transition-colors duration-700 group-hover:bg-[#0A0A0B] overflow-hidden">
                    {/* Header: Access Log Meta */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-6">
                        <div className="flex flex-col gap-1">
                            <span className="text-[7px] font-mono text-primary font-black tracking-widest uppercase">LOG_ENTRY_{i+1024}</span>
                            <span className="text-[6px] font-mono text-gray-500 font-bold uppercase">TIMESTAMP::2024.Q4</span>
                        </div>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-2.5 h-2.5 text-primary fill-primary/20 shadow-[0_0_8px_rgba(139,92,246,0.3)]" />
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <Terminal className="absolute -top-4 -left-4 w-12 h-12 text-white/[0.02] -rotate-12 pointer-events-none" />
                        <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed italic relative z-10">
                            "{t.content}"
                        </p>
                    </div>

                    <div className="mt-auto flex items-center gap-5 pt-8 border-t border-white/5 relative">
                        <div className="relative group/avatar">
                            {/* Holographic Avatar Container */}
                            <div className="w-14 h-14 rounded-none bg-black border border-white/10 flex items-center justify-center font-black text-white shadow-2xl relative overflow-hidden group-hover/avatar:border-primary transition-colors">
                                <span className="relative z-10 text-xs tracking-tighter opacity-80">{t.avatar}</span>
                                <div className="absolute inset-0 bg-primary/20 animate-pulse" />
                                {/* Scanline for Avatar */}
                                <motion.div 
                                    animate={{ top: ["-100%", "200%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-x-0 h-[1.5px] bg-primary/40 z-20 pointer-events-none shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                                />
                            </div>
                            {/* Avatar Float Glow */}
                            <div className="absolute -inset-2 bg-primary/5 blur-xl group-hover/avatar:bg-primary/10 transition-colors pointer-events-none rounded-full" />
                        </div>

                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-0.5">
                                <div className="w-1 h-1 rounded-full bg-primary" />
                                <span className="font-black text-white text-[11px] tracking-tight uppercase">{t.name}</span>
                            </div>
                            <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase font-bold">{t.role}</span>
                        </div>

                        {/* Corner Protocol Tag */}
                        <div className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-30 transition-opacity">
                            <Shield className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    {/* Background Noise Grid Overlay */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:10px_10px]" />
                </div>
            </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

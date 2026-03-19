"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mic2 } from "lucide-react";

const VoiceCoreMonitor = () => {
    return (
        <div className="p-3 md:p-8 text-left h-full flex flex-col justify-center relative group/monitor">
            <div className="border-beam" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/monitor:opacity-100 transition-opacity duration-1000" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                {/* Status Column */}
                <div className="space-y-6 md:space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20 shadow-lg shadow-primary/5">
                            <Mic2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <div className="font-black text-[11px] md:text-[13px] tracking-tight text-white uppercase italic">Voice_Core_Alpha</div>
                            <div className="text-[8px] md:text-[9px] text-primary font-black uppercase tracking-[0.3em] flex items-center gap-2 mt-1">
                                <div className="w-1 h-1 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                                Link_Active
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-3 md:space-y-4">
                        <div className="tracking-[0.2em] uppercase text-[10px] md:text-xs text-gray-600 font-black">Live Clusters</div>
                        {[1, 2, 3].map((i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="p-2 md:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-[10px] md:text-[11px] text-gray-400 flex items-center justify-between"
                            >
                                <span className="font-mono">NODE_0{i}</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Middle Chart Area */}
                <div className="md:col-span-2 flex flex-col justify-between pt-2">
                    <div className="flex items-end gap-1.5 md:gap-2 h-16 md:h-28 w-full px-1">
                        {[40, 70, 55, 95, 75, 85, 65, 80, 50, 90, 70, 100].map((h, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.4 + (i * 0.05), ease: "circOut" }}
                                className="flex-1 bg-gradient-to-t from-primary/10 via-primary/30 to-primary/60 rounded-t-sm md:rounded-t-md relative group min-w-[4px]"
                            >
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm md:rounded-t-md" />
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-8 md:mt-10 flex flex-wrap justify-between items-center gap-6 border-t border-white/[0.06] pt-6 md:pt-8">
                        <div className="min-w-[100px]">
                            <div className="text-[9px] uppercase font-black text-gray-600 tracking-[0.2em] mb-1">Network Latency</div>
                            <div className="text-lg md:text-xl font-bold tracking-tighter">12.8<span className="text-gray-600 text-xs ml-1 font-medium">ms</span></div>
                        </div>
                        <div className="text-left md:text-right min-w-[100px]">
                            <div className="text-[9px] uppercase font-black text-gray-600 tracking-[0.2em] mb-1">Accuracy Engine</div>
                            <div className="text-lg md:text-xl font-bold text-primary tracking-tighter">99.98%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoiceCoreMonitor;

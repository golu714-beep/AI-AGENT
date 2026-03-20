"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring as useFramerSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  MessageSquare,
  Zap,
  Play,
  ChevronRight,
  Mic2,
  Star,
  Target,
  Sparkles,
  ArrowRight,
  Smartphone,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";
import VoiceVisualizer from "./VoiceVisualizer";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useFramerSpring(mouseX, springConfig);
  const smoothY = useFramerSpring(mouseY, springConfig);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center pt-28 md:pt-40 pb-20 md:pb-32 overflow-hidden bg-[#030303]"
    >
      {/* Sophisticated Background Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dynamic Mouse Spotlight - Multi-layered */}
        <motion.div
          className="absolute inset-0 z-0 opacity-60"
          style={{
            background: useTransform([smoothX, smoothY], (vals: number[]) => {
              const [x, y] = vals;
              return `radial-gradient(800px circle at calc(50% + ${x}px) calc(50% + ${y}px), rgba(139,92,246,0.12), transparent 80%)`;
            }),
          }}
        />
        <motion.div
          className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
          style={{
            background: useTransform([smoothX, smoothY], (vals: number[]) => {
              const [x, y] = vals;
              return `radial-gradient(400px circle at calc(50% + ${x * 1.5}px) calc(50% + ${y * 1.5}px), rgba(167,139,250,0.1), transparent 60%)`;
            }),
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />

        {/* Tactical Grid Interlace with Parallax */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{
            x: useTransform(smoothX, [-500, 500], [10, -10]),
            y: useTransform(smoothY, [-500, 500], [10, -10]),
          }}
        />

        {/* Scanning Horizon Effect */}
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10 opacity-30 blur-[1px]"
        />

        {/* Floating Data Packets */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: ["100vh", "-20vh"],
                opacity: [0, 0.3, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 20,
                ease: "linear",
              }}
              style={{
                left: `${10 + Math.random() * 80}%`,
              }}
              className="absolute w-px h-24 bg-gradient-to-t from-transparent via-primary/60 to-transparent"
            />
          ))}
        </div>
      </div>

      {/* Floating Tactical Readouts */}
      <div className="absolute top-40 left-10 md:left-20 hidden lg:flex flex-col gap-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col gap-1"
        >
          <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em] font-bold">
            System_Coord_X
          </span>
          <motion.span className="text-sm font-mono text-primary/80 font-black">
            {mounted
              ? Math.floor(Math.random() * 1000)
                  .toString()
                  .padStart(4, "0")
              : "0000"}
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col gap-1"
        >
          <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em] font-bold">
            Neural_Load
          </span>
          <motion.div
            className="w-24 h-1 bg-white/5 rounded-full overflow-hidden border border-white/5"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500/20 to-emerald-500/60"
              animate={{ width: ["10%", "90%", "30%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-40 right-10 md:right-20 hidden lg:flex flex-col gap-10 pointer-events-none text-right">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="flex flex-col gap-1"
        >
          <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em] font-bold">
            Latency_Optimized
          </span>
          <span className="text-sm font-mono text-emerald-500/80 font-black tracking-widest uppercase">
            STABLE_LINK
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex flex-col gap-1 items-end"
        >
          <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em] font-bold">
            Packet_Sync
          </span>
          <div className="flex gap-1.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0.1, 1, 0.1],
                  scale: [0.9, 1.1, 0.9],
                  backgroundColor: [
                    "rgba(139,92,246,0.1)",
                    "rgba(139,92,246,0.6)",
                    "rgba(139,92,246,0.1)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="w-2 h-2 border border-primary/40 rounded-[1px]"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-2 md:py-3 rounded-full border border-white/[0.08] bg-white/[0.01] mb-12 md:mb-16 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-3xl relative overflow-hidden group/badge"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(139,92,246,1)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 group-hover/badge:text-white transition-colors">
            Intelligence_OS_v2.0
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1000" />
        </motion.div>

        {/* Headline - Character Interactivity */}
        <div className="mb-14 perspective-2000">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-tighter text-white inline-block">
            <div className="flex flex-wrap justify-center gap-x-[0.2em] gap-y-2 md:gap-y-4">
              {["THE", "CUSTOMER"].map((word, wordIdx) => (
                <div
                  key={wordIdx}
                  className="flex overflow-hidden py-2 md:py-6 whitespace-nowrap"
                >
                  {word.split("").map((char, charIdx) => (
                    <motion.span
                      key={charIdx}
                      initial={{ y: "110%", rotate: 10 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{
                        duration: 1.2,
                        delay: (wordIdx * 4 + charIdx) * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{
                        y: -15,
                        color: wordIdx === 1 ? "#A78BFA" : "#fff",
                        scale: 1.1,
                        rotate: wordIdx === 0 ? -5 : 5,
                        textShadow: "0 0 40px rgba(139,92,246,0.6)",
                      }}
                      className={cn(
                        "inline-block cursor-default select-none transition-all duration-300 font-black",
                        word === "CUSTOMER" &&
                          "text-transparent stroke-white/40 [-webkit-text-stroke:1.5px_rgba(255,255,255,0.3)] hover:[-webkit-text-stroke:1.5px_rgba(139,92,246,1)]",
                      )}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{
                delay: 0.8,
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-4 md:mt-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none italic uppercase relative whitespace-nowrap"
            >
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-primary to-primary drop-shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                Experience OS.
              </span>
              <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20 -z-10" />
            </motion.div>
          </h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-lg text-white/40 max-w-3xl mx-auto mb-16 font-medium leading-relaxed px-6 italic"
        >
          <span className="text-white/60">
            Unified predictive voice agents and deep intelligence.
          </span>{" "}
          <br />
          Built for the modern enterprise that demands{" "}
          <span className="text-primary font-bold uppercase tracking-widest px-1">
            Total Scale.
          </span>
        </motion.p>

        {/* CTAs - Premium Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-24 md:mb-40 w-full max-w-xs sm:max-w-none px-4 sm:px-0 mx-auto"
        >
          <button className="w-full sm:w-auto group relative px-8 py-5 md:px-14 md:py-7 bg-white overflow-hidden active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_rgba(139,92,246,0.3)]">
            <div className="relative z-20 flex items-center justify-center gap-4 text-black font-black text-[12px] uppercase tracking-[0.5em] group-hover:text-primary transition-colors duration-300">
              Launch Deployment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
            </div>

            {/* Liquid Border Effect - High Contrast */}
            <div className="absolute inset-0 bg-white" />
            <motion.div
              className="absolute -inset-[500%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(139,92,246,0.8)_180deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            <div className="absolute inset-[1px] bg-white z-10" />
            <div className="absolute inset-0 bg-white group-hover:bg-primary/[0.03] transition-colors z-0" />
          </button>

          <button className="w-full sm:w-auto group px-8 py-5 md:px-14 md:py-7 border border-white/10 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden active:scale-95 transition-all hover:border-primary/40 hover:bg-primary/[0.05]">
            <div className="relative z-10 flex items-center justify-center gap-4 text-white/40 font-black text-[12px] uppercase tracking-[0.5em] group-hover:text-white transition-all duration-500">
              <div className="p-1.5 px-2.5 border border-white/10 rounded-lg bg-white/5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500 shadow-inner">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              Watch Product Tour
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </motion.div>

        {/* Voice Intelligence Preview - Tactical Sharp Lift */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1200 }}
          className="relative max-w-5xl mx-auto"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* High-Contrast Frame */}
            <div className="bg-[#050505] border border-white/[0.15] shadow-[20px_40px_80px_rgba(0,0,0,0.9)] overflow-hidden">
              {/* Tactical OS Header */}
              <div className="px-4 md:px-8 py-4 md:py-5 border-b border-white/10 flex items-center justify-between bg-[#080809]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-white/20" />
                    <div className="w-1.5 h-1.5 bg-white/20" />
                    <div className="w-1.5 h-1.5 bg-white/20" />
                  </div>
                  <div className="h-4 w-[1px] bg-white/10 mx-2" />
                  <span className="text-[10px] font-black text-white/90 tracking-[0.3em] uppercase">
                    SYSTEM_LINK_ON
                  </span>
                </div>
                <div className="flex items-center gap-8">
                  <div className="hidden md:flex items-center gap-6">
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                        Signal_Source
                      </span>
                      <span className="text-xs font-black text-primary uppercase">
                        AZ_SAT_DATA_88
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                        Neural_Sync
                      </span>
                      <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                  <div className="px-3 py-1 border border-white/10 text-xs font-mono text-white/70 tracking-widest uppercase bg-white/[0.02]">
                    CORE_V_6.8
                  </div>
                </div>
              </div>

              <div className="relative">
                <VoiceVisualizer />

                {/* Visual Interlace Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(255,255,255,0.02)_2px)] opacity-10" />
              </div>
            </div>

            {/* Tactical Floating Readouts */}
            <div className="hidden xl:block absolute -left-32 top-1/2 -translate-y-1/2 space-y-10 text-right">
              <div className="flex flex-col gap-1 pr-6 border-r border-primary/40">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                  Proc_Node
                </span>
                <span className="text-xs font-black text-white/90 uppercase italic tracking-widest">
                  FF_X82A
                </span>
              </div>
              <div className="flex flex-col gap-1 pr-6 border-r border-primary/40">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                  Lat_Cap
                </span>
                <span className="text-xs font-black text-primary uppercase italic tracking-widest">
                  &lt; 12MS
                </span>
              </div>
            </div>

            <div className="hidden xl:block absolute -right-32 top-1/2 -translate-y-1/2 space-y-10 text-left">
              <div className="flex flex-col gap-1 pl-6 border-l border-white/20">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                  Auth_Level
                </span>
                <span className="text-xs font-black text-white/70 uppercase tracking-widest">
                  PREMIUM
                </span>
              </div>
              <div className="flex flex-col gap-1 pl-6 border-l border-white/20">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                  Conf_Index
                </span>
                <span className="text-xs font-black text-white/70 uppercase tracking-widest">
                  99.8%
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

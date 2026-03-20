"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
  AnimatePresence,
  useMotionValue,
} from "framer-motion";
import {
  UserPlus,
  Settings,
  Rocket,
  ArrowRight,
  Sparkles,
  Activity,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  Database,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const flowSteps = [
  {
    id: 1,
    title: "Share Basic Details",
    description:
      "Tell us your industry and target country so we can provision the correct onboarding and compliance.",
    icon: <ShieldCheck className="w-5 h-5" />,
    features: [
      "Biometric Verification",
      "Cloud Provisioning",
      "Permission Mapping",
    ],
    stats: { ping: "14ms", secure: "YES", auth: "99.9%" },
    accent: "rgb(59, 130, 246)",
    label: "INIT_AUTH_01",
    serial: "XP-001/A",
  },
  {
    id: 2,
    title: "Send Knowledge Base",
    description:
      "Fill in your voice for script, and up to 25 FAQ pairs. We can help you draft these if you don't have them ready.",
    icon: <Layers className="w-5 h-5" />,
    features: ["Node Allocation", "Elastic Scaling", "Region Lock"],
    stats: { ping: "8ms", sync: "100%", status: "UP" },
    accent: "rgb(168, 85, 247)",
    label: "CLOUD_SYS_02",
    serial: "XP-002/B",
  },
  {
    id: 3,
    title: "Define Logic Flow",
    description:
      "Outline your business logic, qualification or sales, and escalation path for complex queries.",
    icon: <Cpu className="w-5 h-5" />,
    features: ["Branching Logic", "Variable Injection", "Fallback Paths"],
    stats: { ping: "22ms", load: "LOW", status: "MOD" },
    accent: "rgb(6, 182, 212)",
    label: "LOGIC_CFG_03",
    serial: "XP-003/C",
  },
  {
    id: 4,
    title: "Go Live in 48 Hours",
    description:
      "We configure the agent, train it on your data, and hand over the number so you're live and active.",
    icon: <Rocket className="w-5 h-5" />,
    features: ["Agent Training", "Data Sync", "Live Handover"],
    stats: { ping: "5ms", build: "DONE", status: "LIVE" },
    accent: "rgb(34, 197, 94)",
    label: "LIVE_OPS_04",
    serial: "XP-004/D",
  },
];

const StepCard = ({
  step,
  index,
  total,
}: {
  step: (typeof flowSteps)[0];
  index: number;
  total: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative perspective-1000 group/card">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="relative bg-[#080809] border border-white/10 p-6 rounded-none overflow-hidden transition-all duration-700 hover:border-primary/50 shadow-2xl h-full flex flex-col"
      >
        {/* Tactical Bezel Corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/40 opacity-0 group-hover/card:opacity-100 transition-opacity" />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary/40 opacity-0 group-hover/card:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary/40 opacity-0 group-hover/card:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/40 opacity-0 group-hover/card:opacity-100 transition-opacity" />

        {/* Header Readout */}
        <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
              {step.label}
            </span>
            <span className="text-[7px] font-mono text-gray-500 uppercase">
              {step.serial}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end opacity-20 group-hover/card:opacity-100 transition-opacity">
              <span className="text-[6px] font-mono text-gray-500 uppercase">
                Load_Factor
              </span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-1.5 h-1",
                      i <= 3 ? "bg-primary" : "bg-white/10",
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="w-8 h-8 border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover/card:border-primary/50 group-hover/card:bg-primary/5 transition-all">
              <Terminal className="w-3.5 h-3.5 text-gray-600 group-hover/card:text-primary transition-colors" />
            </div>
          </div>
        </div>

        <div
          className="relative z-10"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="w-14 h-14 rounded-none bg-primary/5 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover/card:scale-110 group-hover/card:rotate-12 transition-all duration-700 relative shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-primary" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-primary" />
            {React.cloneElement(step.icon as any, { className: "w-7 h-7" })}
          </div>

          <h3 className="text-xl font-black text-white mb-2 tracking-tighter uppercase italic group-hover/card:translate-x-2 transition-transform">
            {step.title}
          </h3>
          <p className="text-gray-500 text-[11px] leading-relaxed font-medium mb-2 group-hover/card:text-gray-400 transition-colors">
            {step.description}
          </p>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {step.features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-colors group/feat"
              >
                <div className="w-1 h-4 bg-primary/20 group-hover/feat:bg-primary transition-colors" />
                <span className="text-[9px] font-black text-gray-500 group-hover/feat:text-white transition-colors uppercase tracking-widest">
                  {f}
                </span>
              </div>
            ))}
          </div>

          {/* Hardware Stats Readout */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
            {Object.entries(step.stats).map(([key, val], i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[7px] font-mono text-gray-500 uppercase tracking-tighter">
                  {key}
                </span>
                <span className="text-[12px] font-black text-white/40 group-hover/card:text-white transition-colors uppercase tracking-widest">
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Depth Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(139,92,246,0.1)_0%,transparent_70%)] opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
        <div className="absolute bottom-4 right-4 text-[40px] font-black text-white/[0.02] italic pointer-events-none select-none">
          0{index + 1}
        </div>

        {/* Animated Scanline overlay */}
        <motion.div
          animate={{ top: ["-100%", "200%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none z-0"
        />
      </motion.div>
    </div>
  );
};

const OnboardingFlow = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="onboarding"
      ref={sectionRef}
      className="py-20 bg-[#050505] relative overflow-hidden"
    >
      {/* Premium OS Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.03),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.4]" />

        {/* Dynamic Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_20px_20px,#ffffff10_1px,transparent_0)] bg-[size:40px_40px]" />

        {/* Floating Data Pulses */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted &&
            [...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: "-10%",
                  y: Math.random() * 100 + "%",
                  opacity: 0,
                }}
                animate={{ x: "110%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "linear",
                }}
                className="absolute w-20 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
              />
            ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            className="flex items-center gap-4 text-primary font-black uppercase text-[11px] mb-12 tracking-[0.6em] bg-primary/5 px-8 py-3 border border-primary/20 backdrop-blur-3xl shadow-[0_0_50px_rgba(139,92,246,0.1)] relative"
          >
            <div className="absolute top-0 left-0 w-2 h-2 bg-primary" />
            <Activity className="w-4 h-4 animate-pulse" />
            Initialization_Protocol_v.24
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white leading-[0.85] uppercase italic"
          >
            INITIALIZATION{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              PROTOCOL.
            </span>
          </motion.h2>

          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed opacity-60">
            Our simple 4-step process to go live with a human-like agent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative items-stretch">
          {flowSteps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              total={flowSteps.length}
            />
          ))}

          {/* Animated Connecting Links */}
          <div className="hidden lg:block absolute inset-0 -z-10 pointer-events-none">
            <svg className="w-full h-full opacity-10">
              <path
                d="M 12.5% 50% L 87.5% 50%"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="group relative px-8 md:px-16 py-5 md:py-7 md:w-auto w-full max-w-sm bg-white overflow-hidden active:scale-95 transition-all shadow-[0_50px_100px_rgba(255,255,255,0.1)]">
            <span className="relative z-10 flex items-center gap-5 text-black font-black uppercase tracking-[0.5em] text-[12px]">
              <Rocket className="w-5 h-5 fill-current" />
              Initialize_Deployment
            </span>
            <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

            {/* Corner Markers */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 border-l border-t border-black/20" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-r border-b border-black/20" />
          </button>

          <div className="mt-8 flex justify-center items-center gap-8 opacity-20">
            <div className="flex flex-col items-center">
              <span className="text-[8px] font-mono text-gray-500 uppercase">
                Latency_Check
              </span>
              <span className="text-[10px] font-black text-white uppercase italic tracking-widest">
                OK
              </span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-[8px] font-mono text-gray-500 uppercase">
                Node_Availability
              </span>
              <span className="text-[10px] font-black text-white uppercase italic tracking-widest">
                STABLE
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OnboardingFlow;

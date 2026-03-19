import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { UserPlus, Phone, Settings, Users, Rocket, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Onboarding Phase",
    label: "Step 01",
    description: "Initialize your workspace and secure your enterprise credentials.",
    icon: <UserPlus className="w-8 h-8" />,
    color: "from-purple-600/20 to-blue-600/20",
    accent: "text-purple-400",
    glow: "rgba(139, 92, 246, 0.4)",
    details: ["Biometric Verification", "Cloud Provisioning", "Permission Mapping"]
  },
  {
    id: 2,
    title: "Neural Provisioning",
    label: "Step 02",
    description: "Acquire global nodes and configure intelligent call routing.",
    icon: <Phone className="w-8 h-8" />,
    color: "from-blue-600/20 to-cyan-600/20",
    accent: "text-blue-400",
    glow: "rgba(59, 130, 246, 0.4)",
    details: ["SIP Trunking", "Node Selection", "IVR Deployment"]
  },
  {
    id: 3,
    title: "Core Configuration",
    label: "Step 03",
    description: "Inject proprietary data into our specialized LLM architecture.",
    icon: <Settings className="w-8 h-8" />,
    color: "from-cyan-600/20 to-teal-600/20",
    accent: "text-cyan-400",
    glow: "rgba(6, 182, 212, 0.4)",
    details: ["Data Indexing", "Tone Calibration", "Sandbox Testing"]
  },
  {
    id: 4,
    title: "Nexus Integration",
    label: "Step 04",
    description: "Synchronize your contact ecosystem with raw processing power.",
    icon: <Users className="w-8 h-8" />,
    color: "from-teal-600/20 to-emerald-600/20",
    accent: "text-teal-400",
    glow: "rgba(20, 184, 166, 0.4)",
    details: ["CRM Clustering", "Lead Scoring", "Contact Sanitization"]
  },
  {
    id: 5,
    title: "System Activation",
    label: "Step 05",
    description: "Launch your autonomous calling fleet across all regions.",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-emerald-600/20 to-purple-600/20",
    accent: "text-emerald-400",
    glow: "rgba(16, 185, 129, 0.4)",
    details: ["Scale Orchestration", "Live Monitoring", "Audit Generation"]
  }
];

const Fragment = ({ index, color }: { index: number; color: string }) => {
    const randoms = useMemo(() => ({
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        z: Math.random() * 100 - 50
    }), []);

    return (
        <motion.div
            initial={{ opacity: 0, x: randoms.x, y: randoms.y, z: randoms.z, rotate: 45 }}
            animate={{ opacity: 0.15, x: 0, y: 0, z: 0, rotate: 0 }}
            transition={{ 
                duration: 1.5, 
                delay: index * 0.05,
                ease: [0.23, 1, 0.32, 1]
            }}
            className={cn("absolute w-32 h-32 border border-white/5 bg-white/5 rounded-xl backdrop-blur-[2px]", color)}
            style={{ 
                left: `${30 + (index % 3) * 20}%`,
                top: `${30 + Math.floor(index / 3) * 20}%`,
            }}
        />
    );
};

const GettingStartedSteps = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const [state, setState] = useState({ active: 1, direction: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-400, 400], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-10, 10]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const setStep = (id: number) => {
    setState(prev => ({ active: id, direction: id > prev.active ? 1 : -1 }));
  };

  const currentStep = steps.find(s => s.id === state.active)!;

  return (
    <section className="py-20 md:py-32 bg-[#050506] relative overflow-hidden flex flex-col items-center">
      <motion.div 
        animate={{ 
            background: `radial-gradient(circle at 50% 50%, ${currentStep.glow}, transparent 70%)` 
        }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 opacity-20 pointer-events-none" 
      />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl w-full px-6 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase text-[10px] mb-4 tracking-[0.5em] font-mono"
          >
            Digital Genesis Protocol
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white leading-[0.85] uppercase italic mb-6"
          >
            ORBITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">STAGE.</span>
          </motion.h2>
          <p className="text-gray-500 text-sm font-medium max-w-lg mx-auto leading-relaxed">
            Witness the assembly of your autonomous future. A cinematic traversal through the five pillars of AI activation.
          </p>
        </div>

        <div 
            ref={containerRef}
            className="relative h-auto min-h-[650px] w-full flex items-center justify-center perspective-[2000px]"
        >
          <motion.div 
            style={{ rotateX, rotateY }}
            className="relative w-full h-full preserve-3d flex items-center justify-center"
          >
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={state.active}
                initial={{ 
                    opacity: 0, 
                    z: state.direction > 0 ? -1000 : 500, 
                    rotateX: state.direction > 0 ? 45 : -45, 
                    scale: state.direction > 0 ? 0.5 : 1.2 
                }}
                animate={{ 
                    opacity: 1, 
                    z: 0, 
                    rotateX: 0, 
                    scale: 1 
                }}
                exit={{ 
                    opacity: 0, 
                    z: state.direction > 0 ? 500 : -1000, 
                    rotateX: state.direction > 0 ? -45 : 45, 
                    scale: state.direction > 0 ? 1.2 : 0.5 
                }}
                transition={{ 
                    duration: 0.8,
                    ease: [0.23, 1, 0.32, 1]
                }}
                className="relative w-full max-w-5xl h-auto min-h-[550px] md:h-[520px] preserve-3d"
              >
                <div className="absolute inset-0 pointer-events-none">
                    {mounted && [...Array(9)].map((_, i) => (
                        <Fragment key={`${state.active}-${i}`} index={i} color={currentStep.color} />
                    ))}
                </div>

                <div className="absolute inset-0 bg-white/[0.01] rounded-[2rem] md:rounded-[4rem] border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
                    <div className={cn("w-full md:w-1/2 relative flex items-center justify-center bg-gradient-to-br transition-all duration-1000 overflow-hidden py-12 md:py-0 min-h-[200px] md:min-h-0", currentStep.color)}>
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scanline_8s_linear_infinite]" />
                        
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="relative z-10 w-24 h-24 md:w-40 md:h-40 rounded-3xl md:rounded-[2.5rem] bg-black/40 border border-white/20 flex items-center justify-center text-white backdrop-blur-3xl shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                        >
                            {currentStep.icon}
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute inset-0 rounded-[2.5rem] border-2 border-white/20" 
                            />
                        </motion.div>

                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex items-center gap-4">
                            <span className="text-3xl md:text-[40px] font-black text-white/10">0{state.active}</span>
                            <div className="h-0.5 w-8 md:w-12 bg-white/5" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center relative bg-black/20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className={cn("inline-block mb-4 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-xs font-bold uppercase tracking-widest", currentStep.accent)}>
                                {currentStep.label}
                            </span>
                            <h3 className="text-3xl font-black text-white mb-6 tracking-tighter leading-none uppercase">
                                {currentStep.title}
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed mb-10 font-medium">
                                {currentStep.description}
                            </p>
                            
                            <div className="grid grid-cols-1 gap-4 mb-12">
                                {currentStep.details.map((detail, i) => (
                                    <div 
                                        key={i}
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 group hover:bg-white/[0.06] transition-all cursor-default"
                                    >
                                        <div className={cn("w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]", currentStep.accent.replace('text-', 'bg-'))} />
                                        <span className="text-gray-300 text-xs font-black uppercase tracking-[0.2em]">{detail}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group w-full py-5 rounded-3xl bg-white text-black font-black text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-4 hover:bg-white/90 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                            >
                                Initiate Protocol
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute -inset-10 -z-10 bg-white/[0.02] border border-white/5 rounded-[6rem] blur-xl opacity-50" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-12 md:mt-24 w-full max-w-xl">
          <div className="flex items-center justify-between relative bg-white/5 p-1.5 md:p-2 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 backdrop-blur-xl">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setStep(step.id)}
                className="relative flex-1 group py-3 md:py-4 px-1 md:px-2"
              >
                {state.active === step.id && (
                  <motion.div 
                    layoutId="orbital-pill"
                    className="absolute inset-0 bg-white/10 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="flex flex-col items-center gap-2 relative z-10 transition-all duration-300">
                    <div className={cn(
                        "transition-all duration-500",
                        state.active === step.id ? "scale-110 " + step.accent : "text-gray-600 scale-90 group-hover:text-gray-400"
                    )}>
                       {step.icon}
                    </div>
                    <span className={cn(
                        "text-[9px] font-black tracking-widest uppercase",
                        state.active === step.id ? "text-white" : "text-gray-600"
                    )}>
                        Phase 0{step.id}
                    </span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {steps.map((s) => (
                <div 
                    key={s.id}
                    className={cn(
                        "h-1 transition-all duration-500 rounded-full",
                        state.active === s.id ? "w-8 bg-primary" : "w-2 bg-white/10"
                    )}
                />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default GettingStartedSteps;

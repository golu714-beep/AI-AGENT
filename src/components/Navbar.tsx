"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring as useFramerSpring, useTransform } from "framer-motion";
import { Brain, Menu, X, ChevronRight, Activity, Zap, Globe, Shield, Cpu, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Magnetic Button Logic
  const magneticRef = useRef<HTMLAnchorElement>(null);
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);
  const springX = useFramerSpring(mX, { stiffness: 150, damping: 15 });
  const springY = useFramerSpring(mY, { stiffness: 150, damping: 15 });

  const handleMagneticMove = (e: React.MouseEvent) => {
    if (!magneticRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = magneticRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mX.set((clientX - centerX) * 0.4);
    mY.set((clientY - centerY) * 0.4);
  };

  const resetMagnetic = () => {
    mX.set(0);
    mY.set(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features", icon: <Cpu className="w-3 h-3" /> },
    { name: "Solutions", href: "#solutions", icon: <Globe className="w-3 h-3" /> },
    { name: "Onboarding", href: "#onboarding", icon: <Zap className="w-3 h-3" /> },
    { name: "Pricing", href: "#pricing", icon: <Shield className="w-3 h-3" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-700 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <div className="flex justify-center pointer-events-auto">
          <motion.div 
            layout
            initial={false}
            animate={{
               width: isOpen ? "calc(100vw - 48px)" : "auto",
               height: isOpen ? "calc(100vh - 120px)" : "auto",
               borderRadius: isOpen ? "1.5rem" : "2.5rem",
               marginTop: scrolled ? "0px" : "8px"
            }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={cn(
              "flex flex-col md:flex-row items-center gap-0 md:gap-6 px-0 md:px-8 py-0 md:py-2 transition-all duration-700 ease-[0.16, 1, 0.3, 1] relative group overflow-hidden pointer-events-auto",
              scrolled || isOpen
                ? "bg-black/95 backdrop-blur-3xl border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.6)]" 
                : "bg-white/[0.02] border border-white/5 backdrop-blur-md"
            )}
          >
            {/* Border Beam Effect */}
            {(scrolled || isOpen) && <div className="border-beam" />}
            {/* Desktop / Closed Pill Header */}
            <div className={cn(
                "w-full flex items-center justify-between transition-all duration-500",
                isOpen ? "px-6 py-4 border-b border-white/5" : "px-4 py-2"
            )}>
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-4 group/logo relative" onClick={() => setIsOpen(false)}>
                  <div className="relative">
                    <div className="p-1 rounded-xl transition-all duration-500">
                      <img 
                        src="/asset/assets/aitelz_transparent.png" 
                        alt="AITELZ" 
                        className="h-5.5 w-auto object-contain brightness-0 invert opacity-90 group-hover/logo:opacity-100 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
                      />
                    </div>
                    {/* Logo Glow */}
                    <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-700" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black tracking-[0.4em] text-white/90 uppercase hidden md:block group-hover/logo:text-white transition-colors">
                      AITELZ
                    </span>
                    <span className="text-[6px] font-mono text-gray-500 hidden md:block uppercase tracking-widest">Core_Intell_V2</span>
                  </div>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Desktop Navigation (Inner) */}
                    <div className="hidden md:flex items-center gap-6">
                      <div className="w-[1px] h-8 bg-white/5 mx-2" />
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="relative flex items-center gap-2 group/link"
                        >
                          <span className="text-gray-700 group-hover/link:text-primary transition-colors duration-500">
                            {link.icon}
                          </span>
                          <span className="text-[8px] font-black text-gray-500 group-hover/link:text-white transition-all uppercase tracking-[0.2em]">
                            {link.name}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        className="md:hidden relative group p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white/70 hover:text-white transition-all overflow-hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <AnimatePresence mode="wait">
                          {isOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <X className="w-5 h-5" />
                            </motion.div>
                          ) : (
                            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <Menu className="w-5 h-5" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                    </button>
                    
                    {/* Desktop CTA */}
                    <Link 
                        href="#get-started" 
                        className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white text-[9px] font-black uppercase tracking-widest hover:bg-primary/80 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                    >
                        Connect
                    </Link>
                </div>
            </div>

            {/* Mobile Expanded Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex-grow flex flex-col pt-4 overflow-hidden md:hidden relative"
                >
                    {/* HUD Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />
                    
                    <div className="flex-grow flex flex-col gap-2 px-8 py-4 relative z-10">
                        {navLinks.map((link, i) => (
                          <motion.div
                            key={link.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                          >
                            <Link
                              href={link.href}
                              className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-white/40 group-hover:text-primary transition-all duration-300">
                                  {link.icon}
                                </div>
                                <span className="text-base font-bold text-white/70 group-hover:text-white transition-colors">
                                  {link.name}
                                </span>
                              </div>
                              <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                            </Link>
                          </motion.div>
                        ))}
                    </div>

                    {/* Mobile System Status Bar */}
                    <div className="mt-auto p-8 border-t border-white/5 bg-black/40">
                        <div className="flex flex-col gap-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <span className="text-[7px] font-mono text-gray-500 uppercase tracking-widest font-black">Stability</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] font-black text-emerald-500 uppercase">99.98%_UP</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/5 relative overflow-hidden group/mstat">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/mstat:opacity-100 transition-opacity" />
                                    <span className="text-[7px] font-mono text-gray-500 uppercase tracking-widest font-black">Throughput</span>
                                    <div className="flex items-center gap-2">
                                        <Activity className="w-2.5 h-2.5 text-primary/40" />
                                        <span className="text-[10px] font-black text-primary uppercase tracking-tighter">1.2k_TPS</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tactical Metadata Row */}
                            <div className="flex items-center justify-between gap-4 px-2">
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-[5px] font-mono text-gray-600 uppercase tracking-widest">Buffer_Sync</span>
                                        <span className="text-[8px] font-black text-gray-400 uppercase">SYNCHRONIZED</span>
                                    </div>
                                    <div className="w-px h-6 bg-white/5" />
                                    <div className="flex flex-col">
                                        <span className="text-[5px] font-mono text-gray-600 uppercase tracking-widest">Encryption</span>
                                        <span className="text-[8px] font-black text-emerald-500/60 uppercase">AES_256_GCM</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end text-right">
                                    <span className="text-[5px] font-mono text-gray-600 uppercase tracking-widest">Active_Nodes</span>
                                    <span className="text-[8px] font-black text-white/40 uppercase">NODE_04_OK</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between text-[9px] font-mono text-gray-600 uppercase tracking-widest">
                                <span>© 2026 AITELZ_PROTOCOL</span>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-3 h-3" />
                                    <span>ENCRYPTED_SESS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scanning Laser/Bar (Internal) */}
            <motion.div 
              animate={{ left: ["-10%", "110%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-[60px] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.02),transparent)] pointer-events-none"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile Backdrop Blur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] md:hidden bg-black/20 pointer-events-auto"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children?: React.ReactNode;
  className?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  span?: string;
  delay?: number;
}

const BentoCard = ({
  children,
  className,
  title,
  description,
  icon,
  span = "col-span-1",
  delay = 0,
}: BentoCardProps) => {
  const cardRef = React.useRef<HTMLDivElement>(null);

  // Tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // For general mouse position (glow)
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${mx}px`);
    cardRef.current.style.setProperty("--mouse-y", `${my}px`);

    // For tilt
    const width = rect.width;
    const height = rect.height;
    const mouseXRel = (e.clientX - rect.left) / width - 0.5;
    const mouseYRel = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseXRel);
    y.set(mouseYRel);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={cn(
        "glass-card flex flex-col group relative perspective-1000",
        span,
        className,
      )}
    >
      <div className="border-beam" />

      {/* Refined macOS Window Controls */}
      <div className="px-5 py-3 flex items-center justify-between border-b border-white/[0.04] bg-white/[0.01]">
        <div className="flex gap-2">
          <div className="mac-btn mac-close !opacity-20 group-hover:!opacity-60 transition-opacity" />
          <div className="mac-btn mac-minimize !opacity-20 group-hover:!opacity-60 transition-opacity" />
          <div className="mac-btn mac-maximize !opacity-20 group-hover:!opacity-60 transition-opacity" />
        </div>
        <div className="text-[9px] text-gray-600 font-black tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700">
          Module_Type_0{delay * 10 || 1}
        </div>
      </div>

      <div
        className="p-6 md:p-8 flex flex-col h-full relative z-10"
        style={{ transform: "translateZ(50px)" }}
      >
        <motion.div
          whileHover={{ scale: 1.15, rotate: 8 }}
          className="mb-5 inline-flex p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500 w-fit shadow-2xl"
        >
          <div className="text-gray-500 group-hover:text-primary transition-all duration-500 scale-110">
            {icon}
          </div>
        </motion.div>

        <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors text-gradient">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-6 group-hover:text-gray-400 transition-colors font-medium">
          {description}
        </p>

        <div className="mt-auto flex-grow overflow-hidden rounded-[2rem] border border-white/[0.04] bg-[rgba(0,0,0,0.4)] group-hover:border-white/[0.12] transition-all duration-700 backdrop-blur-xl shadow-2xl ring-1 ring-white/5">
          {children}
        </div>
      </div>

      {/* Dynamic Cursor Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.1), transparent 50%)`,
        }}
      />
    </motion.div>
  );
};

export default BentoCard;

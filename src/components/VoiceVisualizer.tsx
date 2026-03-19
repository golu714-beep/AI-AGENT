"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Mic2, Activity, Volume2, ShieldCheck, Zap, Crosshair, Terminal, Binary } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const voices = [
    { id: 'arushi', name: 'Arushi', gender: 'Female', accent: 'Hindi-IN', confidence: 99.4, tag: 'MODEL_A_82', audio: '/audio/voices/arushiVoice.aac' },
    { id: 'imran', name: 'Imran', gender: 'Male', accent: 'Urdu-IN', confidence: 98.9, tag: 'MODEL_I_44', audio: '/audio/voices/imranVoice.aac' },
    { id: 'neha', name: 'Neha', gender: 'Female', accent: 'English-IN', confidence: 99.2, tag: 'MODEL_N_12', audio: '/audio/voices/nehaVoice.aac' },
    { id: 'riya', name: 'Riya', gender: 'Female', accent: 'Bengali-IN', confidence: 97.8, tag: 'MODEL_R_05', audio: '/audio/voices/riyaVoice.aac' },
    { id: 'vikram', name: 'Vikram', gender: 'Male', accent: 'Tamil-IN', confidence: 98.5, tag: 'MODEL_V_99', audio: '/audio/voices/vikramVoice.aac' },
];

const TacticalScope = ({ isPlaying }: { isPlaying: boolean }) => {
    return (
        <div className="relative w-56 h-56 flex items-center justify-center">
            {/* Outer Compass Brackets */}
            <div className="absolute inset-0 border border-white/[0.05] rounded-full" />
            
            {/* Degree Markers */}
            {[0, 90, 180, 270].map((deg) => (
                <div 
                    key={deg} 
                    className="absolute w-full h-full flex items-center justify-center transition-opacity"
                    style={{ transform: `rotate(${deg}deg)` }}
                >
                    <div className="absolute top-0 w-[1px] h-3 bg-primary/40" />
                    <span className="absolute top-4 text-xs font-mono text-gray-700">{deg}°</span>
                </div>
            ))}

            {/* Pulsing Tactical Rings */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        scale: isPlaying ? [1, 1.1 + i * 0.05, 1] : 1,
                        opacity: isPlaying ? [0.2, 0.4, 0.2] : 0.1,
                        rotate: isPlaying ? [0, i % 2 === 0 ? 360 : -360] : 0
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className={cn(
                        "absolute rounded-full border border-dashed",
                        i === 1 ? "inset-4 border-primary/30" : i === 2 ? "inset-12 border-white/10" : "inset-2 border-white/5"
                    )}
                />
            ))}

            {/* Neural Matrix Core */}
            <div className="relative w-36 h-36 rounded-2xl border border-white/10 bg-[#0A0A0B]/80 flex items-center justify-center overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
                {/* Horizontal Scanline */}
                <motion.div 
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[1px] bg-primary/20 z-0 pointer-events-none"
                />

                {isPlaying ? (
                    <div className="flex items-center gap-1.5 h-16 z-10">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    height: [
                                        `${20 + (i % 3) * 20}%`,
                                        `${40 + (i % 2) * 25}%`,
                                        `${10 + (i % 4) * 15}%`
                                    ]
                                }}
                                transition={{
                                    duration: 0.5 + (i % 5) * 0.1,
                                    repeat: Infinity
                                }}
                                className="w-[3px] bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-3 z-10">
                        <Crosshair className="w-8 h-8 text-white/10" />
                        <span className="text-[7px] font-mono text-gray-500 tracking-widest uppercase">Target_Idle</span>
                    </div>
                )}
            </div>

            {/* Coordinate Readouts (Fixed Corners) */}
            <div className="absolute top-0 left-0 text-xs font-mono text-primary/40 uppercase">X_Pos: 8.42</div>
            <div className="absolute bottom-0 right-0 text-xs font-mono text-primary/40 uppercase">Y_Pos: 12.09</div>
        </div>
    );
};

const VoiceVisualizer = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const currentVoice = voices[activeIndex];

    useEffect(() => {
        audioRef.current = new Audio(currentVoice.audio);
        const handleEnded = () => setIsPlaying(false);
        audioRef.current.addEventListener('ended', handleEnded);
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.removeEventListener('ended', handleEnded);
                audioRef.current = null;
            }
        };
    }, [activeIndex]);

    const handleTogglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(console.error);
            setIsPlaying(true);
        }
    };

    return (
        <div className="h-full flex flex-col p-8 gap-8 bg-[#080809] border border-white/5 relative overflow-hidden">
            {/* Header Tactical Info */}
            <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-white/10 bg-white/[0.02] flex items-center justify-center">
                        <Terminal className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Neural_Output_v6.4</span>
                        <div className="flex items-center gap-2">
                           <div className="w-1.5 h-[1px] bg-primary animate-pulse" />
                           <span className="text-[7px] font-mono text-gray-600 uppercase">Data_Stream: Stable</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => setActiveIndex(prev => (prev - 1 + voices.length) % voices.length)} className="p-2 border border-white/10 bg-white/[0.02] hover:bg-white/5 text-gray-500 transition-all">
                        <SkipBack className="w-4 h-4" />
                    </button>
                    <button onClick={() => setActiveIndex(prev => (prev + 1) % voices.length)} className="p-2 border border-white/10 bg-white/[0.02] hover:bg-white/5 text-gray-500 transition-all">
                        <SkipForward className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 flex justify-center">
                   <TacticalScope isPlaying={isPlaying} />
                </div>

                {/* Holographic ID Profile */}
                <div className="w-full md:w-64 space-y-6">
                    <div className="relative p-7 border border-white/10 bg-[#0A0A0B] overflow-hidden group">
                        {/* Brackets */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary/40" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary/40" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-[8px] font-mono text-gray-500 uppercase">{currentVoice.tag}</span>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 rounded-full bg-primary/20" />
                                    <div className="w-1 h-1 rounded-full bg-primary/40" />
                                    <div className="w-1 h-1 rounded-full bg-primary" />
                                </div>
                            </div>
                            
                            <h4 className="text-3xl font-black text-white tracking-tighter mb-1 uppercase italic">{currentVoice.name}</h4>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="text-[8px] font-black text-primary uppercase tracking-[0.2em]">Neural_HD_Link</span>
                                <div className="h-[1px] flex-1 bg-white/5" />
                            </div>

                            <div className="space-y-4">
                                {[
                                    { label: 'Target_Gender', value: currentVoice.gender },
                                    { label: 'Voice_Accent', value: currentVoice.accent },
                                    { label: 'Model_Trust', value: `${currentVoice.confidence}%` }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-end border-b border-white/[0.03] pb-1">
                                        <span className="text-[7px] font-mono text-gray-600 uppercase">{item.label}</span>
                                        <span className="text-[10px] font-black text-white tracking-widest uppercase">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.01)_3px)] pointer-events-none" />
                    </div>

                    <motion.button 
                        whileHover={{ backgroundColor: "rgba(139,92,246,0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleTogglePlay}
                        className={cn(
                            "w-full py-4 rounded-xl font-black text-xs tracking-[0.4em] uppercase transition-all flex items-center justify-center gap-3 border shadow-2xl relative overflow-hidden",
                            isPlaying 
                                ? "border-primary/50 text-primary bg-primary/5" 
                                : "border-white/10 text-white bg-white/[0.02]"
                        )}
                    >
                        {isPlaying ? (
                            <>
                                <Activity className="w-4 h-4 animate-pulse" />
                                SYNC_IN_PROGRESS
                            </>
                        ) : (
                            <>
                                <div className="w-1 h-1 bg-white animate-pulse" />
                                Initialize_Listen
                            </>
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Bottom Status Readout */}
            <div className="flex justify-between items-end relative z-10 pt-6 border-t border-white/5">
                <div className="grid grid-cols-3 gap-8">
                    <div className="flex flex-col">
                        <span className="text-[6px] font-mono text-gray-500 uppercase tracking-widest">Protocol</span>
                        <span className="text-[9px] font-black text-white/50 uppercase">V_24.0.1</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[6px] font-mono text-gray-500 uppercase tracking-widest">Source_Bitrate</span>
                        <span className="text-[9px] font-black text-white/50 uppercase">48KHZ/24B</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[6px] font-mono text-gray-500 uppercase tracking-widest">Hash_Node</span>
                        <span className="text-[9px] font-black text-primary uppercase">AZ_ND_01</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                        <span className="text-[6px] font-mono text-gray-500 uppercase">Bitrate_Buffer</span>
                        <span className="text-[8px] font-black text-white/20">STABLE</span>
                    </div>
                    <Binary className="w-4 h-4 text-white/10" />
                </div>
            </div>
        </div>
    );
};

export default VoiceVisualizer;

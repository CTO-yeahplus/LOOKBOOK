// components/DynamicIsland.tsx
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function DynamicIsland({ weather }: { weather: any }) {
  if (!weather) return null;

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      className="absolute top-9 left-0 right-12 z-30 flex justify-center pointer-events-none px-16"
    >
      <motion.div whileHover={{ scale: 1.05 }} className="pointer-events-auto flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-black/60 pl-2.5 pr-3 py-1.5 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300 hover:bg-black/80 max-w-[260px]">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
          <MapPin className="h-3 w-3 text-blue-400" />
        </div>
        <div className="flex min-w-0 items-center gap-1.5 text-[12px] font-bold tracking-tight text-white/90">
          <span className="truncate opacity-60">{weather.city}</span>
          <span className="shrink-0 h-2 w-[1px] bg-white/10" />
          <span className="shrink-0 text-blue-400">{weather.temp}°C</span>
        </div>
        <div className="flex h-1.5 w-1.5 shrink-0">
          <span className="absolute inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
        </div>
      </motion.div>
    </motion.div>
  );
}
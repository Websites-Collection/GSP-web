"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  format?: "k";
}

export default function StatCard({
  icon: Icon,
  value,
  suffix = "",
  label,
  format,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  const formatted =
    format === "k" ? `${Math.floor(display / 1000)}k` : display;

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      className="glass-panel flex min-w-[150px] flex-1 flex-col items-center gap-2 rounded-2xl px-5 py-6 text-center transition-all hover:border-gold/40 hover:glow-gold"
    >
      <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
      <span className="text-2xl font-bold text-foreground sm:text-3xl">
        {formatted}
        {suffix}
      </span>
      <span className="text-xs uppercase tracking-wide text-foreground/60">
        {label}
      </span>
    </motion.div>
  );
}

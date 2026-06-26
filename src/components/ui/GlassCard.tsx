import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: "gold" | "electric" | "neon" | "none";
}

const glowClasses: Record<string, string> = {
  gold: "hover:glow-gold hover:border-gold/40",
  electric: "hover:glow-electric hover:border-electric/40",
  neon: "hover:glow-neon hover:border-neon/40",
  none: "",
};

export default function GlassCard({
  children,
  className,
  glow = "none",
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "glass-panel rounded-2xl transition-all duration-300",
        glowClasses[glow],
        className
      )}
    >
      {children}
    </div>
  );
}

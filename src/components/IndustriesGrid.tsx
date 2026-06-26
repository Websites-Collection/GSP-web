"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Sparkles,
  Thermometer,
  Sun,
  Landmark,
  Wifi,
  Banknote,
  ShieldCheck,
  Zap,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";
import { industries } from "@/lib/data";

const icons = [
  Building2,
  Sparkles,
  Thermometer,
  Sun,
  Landmark,
  Wifi,
  Banknote,
  ShieldCheck,
  Zap,
];

const accents = ["electric", "gold", "neon"] as const;

const iconColor: Record<(typeof accents)[number], string> = {
  electric: "text-electric",
  gold: "text-gold",
  neon: "text-neon",
};

export default function IndustriesGrid() {
  return (
    <section id="industries" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Industries &amp; Verticals We Serve
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/65">
            Specialized prospecting and outreach systems built for the
            verticals where qualified appointments move revenue fastest.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const accent = accents[i % accents.length];
            return (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              >
                <GlassCard
                  glow={accent}
                  className="flex h-full flex-col items-start gap-3 p-6"
                >
                  {(() => {
                    const Icon = icons[i];
                    return (
                      <Icon
                        className={`h-6 w-6 ${iconColor[accent]}`}
                        strokeWidth={1.5}
                      />
                    );
                  })()}
                  <span className="text-sm font-semibold text-foreground/90">
                    {industry}
                  </span>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

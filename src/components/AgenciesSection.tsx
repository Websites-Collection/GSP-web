"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import { reachGlobal, virtualBusinessSolutions } from "@/lib/data";

export default function AgenciesSection() {
  return (
    <section id="agencies" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Two Agencies.
            <br />
            <span className="text-gradient-gold">One Unstoppable System.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/65">
            Reach Global brings market access, brand strategy, and campaign
            intelligence. Virtual Business Solutions powers automation, lead
            qualification, and real-time pipeline delivery. Together, we
            build appointment systems that consistently drive growth.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard glow="electric" className="h-full p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-electric">
                Agency 01
              </p>
              <h3 className="mt-2 text-2xl font-bold">Reach Global</h3>
              <ul className="mt-6 flex flex-col gap-4">
                {reachGlobal.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-electric" strokeWidth={1.5} />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard glow="neon" className="h-full p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">
                Agency 02
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Virtual Business Solutions
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {virtualBusinessSolutions.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-neon" strokeWidth={1.5} />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

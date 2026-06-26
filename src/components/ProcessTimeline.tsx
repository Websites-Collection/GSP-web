"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/data";

export default function ProcessTimeline() {
  return (
    <section id="how-it-works" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From Signal to{" "}
            <span className="text-gradient-gold">Signed Appointment</span>
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-4">
          {processSteps.map((step, i) => (
            <div key={step.step} className="contents lg:flex lg:flex-1 lg:items-stretch lg:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel flex flex-1 flex-col gap-3 rounded-2xl p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-sm font-bold text-gold glow-gold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/65">
                  {step.copy}
                </p>
              </motion.div>

              {i < processSteps.length - 1 && (
                <div className="hidden items-center justify-center lg:flex">
                  <ArrowRight className="h-5 w-5 shrink-0 text-foreground/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
